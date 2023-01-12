---
id: babylond_query_staking_validator
sidebar_label: babylond query staking validator
hide_table_of_contents: true

---

# babylond query staking validator
Querying a detail for an individual validator.
## query staking validator command
```
babylond query staking validator [validator-addr] [flags]
```
### Example Command
```
$ babylond query staking validator babylondloper1tthjut3ccd8ay0zduzj64hwre2fxs9loopjj
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for validator
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