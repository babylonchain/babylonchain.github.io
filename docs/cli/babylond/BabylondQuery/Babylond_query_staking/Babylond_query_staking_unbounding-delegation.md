---
id: babylond_query_staking_unbounding-delegation
sidebar_label: Babylond_query_staking_unbounding-delegation
hide_table_of_contents: true

---

# Babylond Query staking unbonding-delegation
Querying an unbounding-delegation record based on the delegator and validator address.
## query staking unbonding-delegation command
```
babylond query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]
```
### Example Command
```
$ babylond query staking unbonding-delegation babylond2tthjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p babylonddev1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for unbonding-delegation
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