---
id: getting-funds
sidebar_label: Getting Testnet Tokens
hide_table_of_contents: true
---

# Getting Testnet Tokens

Learn how to get testnet tokens for Babylon.

---


## 1. Create a Keyring

One can create a keyring through the `babylond keys add` command. Full specification
for this command can be found under the [CLI docs](/docs/cli/babylond/keys/babylondkeysdd.md).

```console
# Replace the --keyring-backend argument with a backend of your choice
babylond --keyring-backend test keys add my-key
```

This will output an address and a memo. Record the memo as it is the only way to recover your key if it gets lost.

## 2. Request Funds from the Babylon Testnet Faucet

:::info
Please note that the faucet is currently inactive until the testnet launch; kindly reach out to the team for testnet tokens in the meantime.
:::
