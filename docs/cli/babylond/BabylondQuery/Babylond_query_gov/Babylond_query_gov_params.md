---
id: babylond_query_gov_params
sidebar_label: Babylond_query_gov_params
hide_table_of_contents: true

---

# Babylond Query gov params
Querying all the parameters for the governance module.
## query gov params command
```
babylond query gov params [flags]
```
### Example Command
```
$ babylond query gov params
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for params
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