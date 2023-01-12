---
id: babylond_query_staking_unbounding-delegations-from
sidebar_label: babylond query staking unbonding-delegations-from
hide_table_of_contents: true

---

# babylond query staking unbonding-delegations-from
Querying all unbonding delegations from a validator.
## query staking unbonding-delegations-from command
```
babylond query staking unbonding-delegations-from [validator-addr] [flags]
```
### Example Command
```
$ babylond query staking unbonding-delegations-from babylondloper1tthjut3ccd8ay0zduzj64hwre2fxs9loophjj
```
## Options
```
      --count-total       count total number of records in unbonding delegations to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for unbonding-delegations-from
      --limit uint        pagination limit of unbonding delegations to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of unbonding delegations to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of unbonding delegations to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of unbonding delegations to query for
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