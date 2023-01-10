---
id: Babylond_query_ibc_client_status
sidebar_label: Babylond_query_ibc_client_status
hide_table_of_contents: true

---

# Babylond Query ibc client status
Querying the activity of the currently active client by the specified client identifier.
## query ibc client status command
```
babylond query ibc client status [client-id] [flags]
```
### Example Command
```
$ babylond query ibc client status 1234htyuhgnka358
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for status
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