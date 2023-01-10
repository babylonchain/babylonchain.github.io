---
id: babylond_query_staking_delegations
sidebar_label: Babylond_query_staking_delegations
hide_table_of_contents: true

---

# Babylond Query staking delegations
Querying for an individual delegator address on all validators.
## query staking delegations command
```
babylond query staking delegations [delegator-addr] [flags]
```
### Example Command
```
$ babylond query staking delegations babylond1gghjut3ccd8ay0zduzj64hwre2fxs9ld88thu0k
```
## Options
```
      --count-total       count total number of records in delegations to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for delegations
      --limit uint        pagination limit of delegations to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of delegations to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of delegations to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of delegations to query for
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