---
id: babylondaddgenesisaccount
sidebar_label: babylond add-genesis-account
hide_table_of_contents: true

---

# babylond add-genesis-account
This command adds an account to the genesis.json file. The account's address, key name, and coins must be specified. If the key name is supplied, it will be retrieved from the local key base. The coins or tokens must include valid denominations.
## add-genesis-account command
```
babylond add-genesis-account [address_or_key_name] [coin][,[coin]] [flags]
```
## Options
```
      --height int               Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help                     help for add-genesis-account
      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test) (default "os")
      --node string              <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:2665
```
```
 -o,  --output string            Output format (text|json) (default "text")
      --vesting-amount string    amount of coins for vesting accounts
      --vesting-end-time int     schedule end time (unix epoch) for vesting accounts
      --vesting-start-time int   schedule start time (unix epoch) for vesting accounts
```
## Options Inherited from Parent Commands
```
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on errors
```