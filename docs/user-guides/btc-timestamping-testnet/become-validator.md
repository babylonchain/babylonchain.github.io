---
id: become-validator
sidebar_label: Become a Validator
hide_table_of_contents: true
---

# Become a Validator

Learn how to become a Validator for Babylon.

---

## Prerequisites
Having a full node setup and synced by following this [guide](./setup-node.md)

## 1. Create a Keyring and Get Funds

Validators are required to have funds for two reasons:
1. They need to provide a self delegation
2. They need to pay for transaction fees for submitting BLS signature transactions

:::info Note

Currently, validators can only use the `test` keyring backend. In the future,
Babylon will support other types of encrypted backends provided by the Cosmos SDK for validators.

:::

The [Getting Testnet Tokens](./getting-funds.md) page contains detailed instructions
on how to create a keyring and get funds for it through a faucet.

## 2. Create a BLS key

Validators are expected to submit a BLS signature at the end of each epoch.
To do that, a validator needs to have a BLS key pair to sign information with.

Using the address that you created on the previous step (`$ADDR` variable):

```console
babylond create-bls-key $ADDR
```

This command will create a BLS key and add it to the `~/.babylond/config/priv_validator_key.json`.
This is the same file that stores the private key that the validator uses to sign blocks.
Please ensure that this file is secured properly.

After creating a BLS key, you need to restart your node to load this key into
memory. If you followed the [setting up a node guide](./setup-node.md), you
would have to
```console
sudo systemctl stop babylond
sudo systemctl start babylond
```

## 3. Modify the Configuration

A Babylon validator needs to send BLS signature transactions at the end of each epoch.
This process is done automatically through the Babylon codebase which identifies
which key to use from the `~/.babylond/config/client.toml` file. Edit this file and
set the keyring backend that you're using.
In this guide's case:
```toml
keyring-backend = "test"
```

Furthermore, you need to specify the name of the key that the validator will be
using to submit BLS signature transactions under the
`~/.babylond/config/app.toml` file. Edit this file and set the key name to the
one that holds funds on your keyring:
```toml
key-name = "val-key" # replace with your key name
```

Finally, it is strongly recommended to modify the `timeout_commit` value
under `~/.babylond/config/config.toml`. This value specifies
how long a validator will wait before commiting a block before starting
on a new height. More information can be found [here](https://docs.tendermint.com/v0.33/tendermint-core/configuration.html#consensus-timeouts-explained).
Given that Babylon aims to have a 10 second time between blocks, set this value
to:
```toml
timeout_commit = "10s"
```

## 4. Create the Validator

Contrary to a vanilla Cosmos SDK chain, a validator for Babylon is created through
the `babylond tx checkpointing create-validator` command.
This command expects that a BLS validator key exists under the `~/.babylond/config/priv_validator_key.json`.

:::info

Note: Babylon validators are required to submit a BLS signature transaction
every epoch (with current parameters every ~30mins). Those transactions
currently cost a static gas fee of `100ubbn`. Therefore, it is important
that validators maintain enough unbonded funds in their keyring to pay
for those transaction fees.

:::

To create the validator (using sample parameters):
```console
# Note the variables
# - $AMOUNT the amount to delegate in ubbn, e.g. 1000000ubbn (must be less than the delegator's balance)
# - $CHAIN_ID the chain ID
# - $VAL_KEY the name of the key (with a test keyring backend) used for the validator
babylond tx checkpointing create-validator \
    --amount="$AMOUNT" \
    --pubkey=$(babylond tendermint show-validator) \
    --moniker="My Validator" \
    --chain-id=$CHAIN_ID \
    --gas="auto" \
    --gas-adjustment=1.2 \
    --gas-prices="0.0025ubbn" \
    --keyring-backend=test \
    --from=$VAL_KEY \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1"
```

:::info

Note: In order to become an active validator, you need to have more `ubbn`
tokens bonded than the last validator ordered by the tokens bonded (or the
validator set to not be full) as well as have at least `1000000ubbn` bonded.

:::

## 5. Verify your Validator

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

:::info
If you want to delegate, redelegate, unbond or cancel-unbond use the wrapped messages in the
checkpointing and epoching modules as the messages in staking module are disabled.
Read more [here](/docs/developer-guides/modules/epoching.md#delaying-wrapped-messages-to-the-end-of-epochs)
:::
