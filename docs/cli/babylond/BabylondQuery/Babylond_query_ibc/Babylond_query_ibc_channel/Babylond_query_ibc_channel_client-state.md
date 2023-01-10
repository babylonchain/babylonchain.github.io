---
id: Babylond_query_ibc_channel_client-state
sidebar_label: Babylond_query_ibc_channel_client-state
hide_table_of_contents: true

---

# Babylond Query ibc channel client-state
Querying the client state associated with a channel by the specified port and channel identifier.
## query ibc channel client-state command
```
babylond query ibc channel client-state [port-id] [channel-id] [flags]
```
### Example Command
```
$ babylond query ibc channel client-state [port-id] [channel-id]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for client-state
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```