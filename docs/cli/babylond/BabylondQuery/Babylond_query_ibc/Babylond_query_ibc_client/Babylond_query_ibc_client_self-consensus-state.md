---
id: Babylond_query_ibc_client_self-consensus-state
sidebar_label: Babylond_query_ibc_client_self-consensus-state
hide_table_of_contents: true

---

# Babylond Query ibc client self-consensus-state
Query the self-consensus state for this chain.
## query ibc client self-consensus-state command
```
babylond query ibc client self-consensus-state [flags]
```
### Example Command
```
$ babylond query ibc client self-consensus-state
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for self-consensus-state
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