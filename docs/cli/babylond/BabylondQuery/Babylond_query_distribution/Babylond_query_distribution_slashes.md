---
id: babylond_query_distribution_slashes
sidebar_label: Babylond_query_distribution_slashes
hide_table_of_contents: true

---

# Babylond Query distribution slashes
Querying all slashes of a validator for the given block height.
## query distribution slashes command
```
babylond query distribution slashes [validator] [start-height] [end-height] [flags]
```
### Example Command
```
$ babylond query distribution slashes babylond12346ccd8ay0zduzj64hwre2fxs9ldmqhffj 0 50
```
## Options
```
      --count-total       count total number of records in validator slashes to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for slashes
      --limit uint        pagination limit of validator slashes to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of validator slashes to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of validator slashes to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of validator slashes to query for
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