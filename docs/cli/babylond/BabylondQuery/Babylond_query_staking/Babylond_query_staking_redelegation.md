---
id: babylond_query_staking_redelegation
sidebar_label: Babylond_query_staking_redelegation
hide_table_of_contents: true

---

# Babylond Query staking redelegation
Querying a redelegation record based on the delegator, a source, and a destination validator address.
## query staking redelegation command
```
babylond query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]
```
### Example Command
```
$ babylond query staking redelegation babylonddevl8ut3ccd8ay0zduzj64hwre2fxs9ld75ru9p axelarvaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm babylonddev1gghjut3ccd8ay0zduzj64hwre2fxs9lfvgtt
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for redelegation
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```