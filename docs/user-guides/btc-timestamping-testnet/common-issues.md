---
id: common-issues
sidebar_label: Common Issues
hide_table_of_contents: true
---

# Common Issues

This article provides an overview of how to handle any errors occurred when installing the Babylon Chain.

- [Common Issues](#common-issues)
  - [When Initializing Babylon Chain](#when-initializing-babylon-chain)
    - [Genesis File Already Exists](#genesis-file-already-exists)
  - [When Running A Validator](#when-running-a-validator)
    - [Why can't I {create a validator, delegate, undelegate, redelegate}?](#why-cant-i-create-a-validator-delegate-undelegate-redelegate)
    - [Why does my newly created validator/delegation not show up immediately?](#why-does-my-newly-created-validatordelegation-not-show-up-immediately)
    - [It has been many epochs but why does my validator/delegation still not show up?](#it-has-been-many-epochs-but-why-does-my-validatordelegation-still-not-show-up)
    - [Why does running a validator cost gas?](#why-does-running-a-validator-cost-gas)


## When Initializing Babylon Chain

### Genesis File Already Exists

```
Error: genesis.json file already exists
```

This occurs when a genesis file already exists when initializing the Babylon Chain.

**Solution:** Remove the `genesis.json` file from your `babylond` home directory (typically `~/.babylond/config/genesis.json`).

```
rm -r ~/.babylond
```

## When Running A Validator

### Why can't I {create a validator, delegate, undelegate, redelegate}?

Babylon has replaced Cosmos SDK's staking module with its own epoching module.
It enables epoched staking where validator set is rotated per epoch (which is around an hour in the BTC timestamping testnet), rather than per block.
Therefore, one needs to use `babylond tx epoching {delegate, undelegate, redelegate}` for delegating/undelegating/redelegating,
and use `babylond tx checkpointing create-validator` for creating a validator.

### Why does my newly created validator/delegation not show up immediately?

Babylon has applied epoched staking, such that creating validator, delegation, undelegation, redelegation requests
will be handled only upon the end of the current epoch.

### It has been many epochs but why does my validator/delegation still not show up?

In this case, the validator/delegation request might have been rejected upon the end of that epoch.
Please try to query the block at the epoch end to see if there exists events saying that a validator/delegation request has been rejected.
One common possibility is that after submitting the request, the account has spent some tokens such that it has insufficient balance for creating the validator/delegation at the epoch end (upon which the request will be handled).

### Why does running a validator cost gas?

Apart from Tendermint consensus, a Babylon validator needs to create a BLS signature to sign the checkpoint for each epoch and submit the BLS signature to Babylon.
The BLS signature is wrapped as a Cosmos SDK transaction, leading to gas cost.
Therefore, it is a requirement that when running a Babylon validator, one needs to keep some balance in the validator operator's account.
