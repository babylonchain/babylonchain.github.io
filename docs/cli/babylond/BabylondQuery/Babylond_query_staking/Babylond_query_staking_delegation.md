---
id: babylond_query_staking_delegation
sidebar_label: Babylond_query_staking_delegation
hide_table_of_contents: true

---

# Babylond Query staking delegation
Querying for a delegation individual delegator address on the individual validator.
## query staking delegation command
```
babylond query staking delegation [delegator-addr] [validator-addr] [flags]
```
### Example Command
```
 $ babylond query staking delegation babylon1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p axelarvaloper1gghjut3ccd8ay0zduzj64hwre2fxs9lgghty
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for delegation
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