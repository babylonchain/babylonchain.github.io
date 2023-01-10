---
id: babylond_query_staking_redelegations
sidebar_label: Babylond_query_staking_redelegations
hide_table_of_contents: true

---

# Babylond Query staking redelegations
Query all redelegation records for one delegator.
## query staking redelegations command
```
babylond query staking redelegations [delegator-addr] [flags]
```
### Example Command
```
$ babylond query staking redelegation babylond34rfgjut3ccd8ay0zduzj64hwre2fxs9ld67uop
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