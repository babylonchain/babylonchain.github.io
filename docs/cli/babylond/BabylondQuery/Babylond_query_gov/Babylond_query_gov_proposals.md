---
id: babylond_query_gov_proposals
sidebar_label: babylond query gov proposals
hide_table_of_contents: true

---

# babylond query gov proposals
Querying details for all the proposals that match the specified filters.
## query gov proposals command
```
babylond query gov proposal [proposal-id] [flags]
```
### Example Command
```
$ babylond query gov proposals --page=2 --limit=100
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for proposal
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