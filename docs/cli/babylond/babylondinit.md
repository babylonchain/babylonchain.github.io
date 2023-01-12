---
id: babylondinit
sidebar_label: babylond init
hide_table_of_contents: true

---

# babylond init
Initialize private validator, p2p, genesis, and application configuration files.
## init command
```
babylond init [moniker] [flags]
```
## Options
```
      --chain-id string             genesis file chain-id, if left blank will be randomly created
  -h, --help                        help for init
      --home string                 node's home directory (default "/home/<yourSystemUsername>/.babylond")
  -o, --overwrite                   overwrite the genesis.json file
      --recover                     provide seed phrase to recover existing key instead of creating
      --staking-bond-denom string   genesis file staking bond denomination, if left blank default value is 'stake'
```
## Options Inherited from Parent Commands
```
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
 --trace               print out full stack trace on errors
```