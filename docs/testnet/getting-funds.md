---
id: getting-funds
sidebar_label: Getting Testnet Tokens
hide_table_of_contents: true
---

# Getting Testnet Tokens

🔎 Learn how to get testnet tokens for Babylon.

---

In this guide we will go through how you can create a keyring and request for tokens
through the Babylon testnet faucet.

## 1. Create a keyring

:::info Note

Currently, validators can only use the `test` keyring backend
because they need to automatically submit transactions containing BLS signatures.
In the future,
Babylon will support other types of encrypted backends provided
by the Cosmos SDK for validators.

:::

One can create a keyring through the `babylond keys add` command. Full specification
for this command can be found under the [CLI docs](../cli/babylond/keys/babylondkeysdd.md).

```console
# Replace the --keyring-backend argument with a backend of your choice
babylond --keyring-backend test keys add my-key
```

This will output an address and a memo. Record the memo as it is the only way to recover your key if it gets lost.

## 2. Request funds from the Babylon testnet faucet

This can be accomplished by going to the [Babylon testnet faucet](https://faucet.testnet.babylonchain.io) page to 
request funds by providing the address you created before.
