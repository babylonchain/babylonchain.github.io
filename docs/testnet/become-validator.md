---
id: become-validator
sidebar_label: Becoming a Validator
hide_table_of_contents: true
---

# Becoming a Validator

In this guide we are going to go through the steps for someone
to become a validator.

Prerequisites: Having a full node setup and synced by following this [guide](./setup-node.md)

## Create a Keyring and Get Funds

:::info Note

Currently, validators can only use the `test` keyring backend. In the future,
Babylon will support other types of encrypted backends provided by the Cosmos SDK for validators.

:::

To create the keyring that will hold the validator account:
```console
babylond --keyring-backend test keys add val-key
```

This will generate an address as well as a mnemonic which should be noted for future reference.
In order to become a validator, you need to have funds that will be bonded.
Funds can be retrieved either through our [faucet](https://faucet.testnet.babylonchain.io) for the testnet
or from other sources that have access to testnet Babylon tokens.

## Create a BLS key

Validators are expected to submit a BLS signature at the end of each epoch.
To do that, a validator needs to have a BLS key pair to sign information with.

Using the address that you created on the previous step (`$ADDR` variable):

```console
babylond create-bls-key $ADDR
```

This command will create a BLS key and add it to the `~/.babylond/config/priv_validator_key.json`.
This is the same file that stores the private key that the validator uses to sign blocks.
Please ensure that this file is secured properly.

## Modify the client configuration

A Babylon validator needs to send BLS signature transactions at the end of each epoch.
This process is done automatically through the Babylon codebase which identifies
which key to use from the `~/.babylond/config/client.toml` file. Edit this file and
set the keyring backend that you're using.
In this guide's case:
```toml
keyring-backend = "test"
```

## Create the validator

Contrary to a vanilla Cosmos SDK chain, a validator for Babylon is created through
the `babylond tx checkpointing create-validator` command.
This command expects that a BLS validator key exists under the `~/.babylond/config/priv_validator_key.json`
and has the same parameters as the `babylond tx staking create-validator` command.

To create the validator (using sample parameters):
```console
babylond tx checkpointing create-validator \
    --amount="1000000ubbn" \
    --pubkey=$(babylond tendermint show-validator) \
    --moniker="My Validator" \
    --chain-id=bbn-test-0\
    --gas="auto" \
    --gas-adjustment=1.2 \
    --gas-prices="0.0025ubbn" \
    --from=val-key \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1"
```

## Verify your validator

On the Babylon system,
one can become a validator only after an epoch ends.
For the testnet, an epoch lasts for around 30 minutes.

To verify that you have become a validator, first find your validator address:
```
babylond keys show $KEYNAME -a --bech val
```
where `$KEYNAME` is the name of the key that you used for the self-delegation (e.g. `val-key` on our example).
This will return an address which you can use as the `$ADDR` variable to perform the following query:
```console
babylond query staking validator $ADDR
```

If all goes well, you should see a response indicating the parameters that you specified
on the `create-validator` transaction.

After the epoch ends and if you have enough stake to be an active validator,
performing this query will return you a status `BOND_STATUS_BONDED`.
Congrats! You are now a validator on the Babylon system.
