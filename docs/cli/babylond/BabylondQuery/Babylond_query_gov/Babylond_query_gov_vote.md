---
id: babylond_query_gov_vote
sidebar_label: babylond query gov vote
hide_table_of_contents: true

---

# babylond query gov vote
Querying details of a single vote on the governance module by the given identifier.
## query gov vote command
```
babylond query gov vote [proposal-id] [voter-addr] [flags]
```
### Example Command
```
$ babylond query gov vote 1 cosmos55667j5whet0lpe65qaq4rpq03hjxlwd9772565k
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for vote
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