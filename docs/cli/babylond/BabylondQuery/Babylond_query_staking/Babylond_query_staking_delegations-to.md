---
id: babylond_query_staking_delegations-to
sidebar_label: Babylond_query_staking_delegations-to
hide_table_of_contents: true

---

# Babylond Query staking delegations-to
Query all delegations made to one validator.
## query staking delegations-to command
```
babylond query staking delegations-to [validator-addr] [flags]
```
### Example Command
```
$ babylond query staking delegations-to babylondloepr29oohjut3ccd8ay0zduzj64hwre2fxs9ldmqhnmg
```
## Options
```
      --count-total       count total number of records in validator delegations to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for delegations-to
      --limit uint        pagination limit of validator delegations to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of validator delegations to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of validator delegations to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of validator delegations to query for
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