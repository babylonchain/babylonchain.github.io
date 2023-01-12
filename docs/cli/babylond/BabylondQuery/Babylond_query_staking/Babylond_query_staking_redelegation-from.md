---
id: babylond_query_staking_redelegation-from
sidebar_label: babylond query staking redelegation-from
hide_table_of_contents: true

---

# babylond query staking redelegation-from
Query all outgoing redelegations from a validator.
## query staking redelegation-from command
```
babylond query staking redelegations-from [validator-addr] [flags]
```
### Example Command
```
$ babylond query staking redelegations-from babylondloper44thgut3ccd8ay0zduzj64hwre2fxs9luytnnm
```
## Options
```
      --count-total       count total number of records in validator redelegations to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for redelegations-from
      --limit uint        pagination limit of validator redelegations to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of validator redelegations to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of validator redelegations to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of validator redelegations to query for
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