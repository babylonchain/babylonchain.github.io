---
id: babylond_query_gov_deposit
sidebar_label: Babylond_query_gov_deposit
hide_table_of_contents: true

---

# Babylond Query gov deposit
Querying details for a deposit on a proposal by the specified identifier.
## query gov deposit command
```
babylond query gov deposit [proposal-id] [depositer-addr] [flags]
```
### Example Command
```
$ babylond query gov deposit 2 cosmos1skjwj5whet0lpe65opo4rpq03hjxlwd123456
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for deposit
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