---
id: babylond_query_tx
sidebar_label: babylond query tx
hide_table_of_contents: true

---

# babylond query tx
Querying a transaction by hash (addr/seq) combination or comma-separated signatures in a committed block.
## query tx command
```
babylond query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]
```
### Example Commands
```
$ babylond query tx <hash>
$ babylond query tx --type=acc_seq <addr>/<sequence>
$ babylond query tx --type=signature \<sig1_base64>,\<sig2_base64...>
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for tx
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --type string     The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```