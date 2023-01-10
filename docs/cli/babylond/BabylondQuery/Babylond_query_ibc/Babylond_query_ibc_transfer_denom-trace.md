---
id: Babylond_query_ibc_transfer_denom-trace
sidebar_label: Babylond_query_ibc_transfer_denom-trace
hide_table_of_contents: true

---

# Babylond Query ibc-transfer denom-trace
Querying the denom trace info by the given trace hash or ibc denom.
## query ibc-transfer denom-trace command
```
babylond query ibc-transfer denom-trace [hash/denom] [flags]
```
### Example Command
```
$ babylond query ibc-transfer denom-trace 27A6394C3F9FF9C9DCF5DFFADF9BB5FE9A37C7E92B006199894CF1824DF9AC7C
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for denom-trace
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