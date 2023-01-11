---
id: Babylond_query_ibc_client_consensus-state-heights
sidebar_label: Babylond_query_ibc_client_consensus-state-heights
hide_table_of_contents: true

---
# Babylond Query ibc client consensus-state-heights
Querying all the consensus state of a client by the specified height.
## query ibc client consensus-state-heights command
```
babylond query ibc client consensus-state-heights [client-id] [flags]
```
### Example Command
```
$ babylond query ibc client consensus-state-heights [client-id]
```
## Options
```
      --count-total       count total number of records in consensus state heights to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for consensus-state-heights
      --limit uint        pagination limit of consensus state heights to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of consensus state heights to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of consensus state heights to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of consensus state heights to query for
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