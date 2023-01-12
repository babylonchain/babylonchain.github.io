---
id: babylond_query_gov_proposal
sidebar_label: babylond query gov proposal
hide_table_of_contents: true

---

# babylond query gov proposal
Querying a detail for a proposal.
## query gov proposal command
```
babylond query gov proposal [proposal-id] [flags]
```
### Example Command
```
$ babylond query gov proposal 1
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