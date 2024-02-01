---
id: getting-funds
sidebar_label: Get Testnet Tokens
hide_table_of_contents: true
---

# Get Testnet Tokens

Learn how to get testnet tokens for Babylon.

---


## 1. Create a Keyring

:::info Note

Currently, validators can only use the `test` keyring backend
because they need to automatically submit transactions containing BLS signatures.
In the future,
Babylon will support other types of encrypted backends provided
by the Cosmos SDK for validators.

:::

One can create a keyring through the `babylond keys add` command. Full specification
for this command can be found under the [CLI docs](/docs/cli/babylond/keys/babylondkeysdd.md).

```console
# Replace the --keyring-backend argument with a backend of your choice
babylond --keyring-backend test keys add my-key
```

This will output an address and a memo. Record the memo as it is the only way to recover your key if it gets lost.

## 2. Request Funds from the Babylon Testnet Faucet

This can be accomplished by going to the `#faucet` channel of our official [Discord server](https://discord.com/invite/babylonglobal) to 
request funds by providing the address you created before.
After joining the channel, users send a request starting with `!faucet` followed by the request address.
For example, `!faucet bbn1sajf5fd7tyjt0jjy6lqzahy09jl2nkcnx5qm06`.
