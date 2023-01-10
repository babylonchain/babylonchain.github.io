---
id: Babylond_query_ibc_connection_connections
sidebar_label: Babylond_query_ibc_connection_connections
hide_table_of_contents: true

---

# Babylond Query ibc connection connections
Querying all the connections from a chain.
## query ibc connection connections command
```
babylond query ibc connection connections [flags]
```
### Example Command
```
$ babylond query ibc connection connections
```
## Options
```
      --count-total       count total number of records in connection ends to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for connections
      --limit uint        pagination limit of connection ends to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of connection ends to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of connection ends to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of connection ends to query for
      --reverse           results are sorted in descending order
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```