---
id: babylond_query_txs
sidebar_label: Babylond_query_txs
hide_table_of_contents: true

---

# Babylond Query txs
Querying for paginated transactions that match a set of events.
## query txs command
```
babylond query txs [flags]
```
### Example Command
```
$ babylond query txs --events 'message.sender=cosmos5...&message.action=withdraw_delegator_reward' --page 1 --limit 50
```
## Options
```
      --events string   list of transaction events in the form of {eventType}.{eventAttribute}={value}
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for txs
      --limit int       Query number of transactions results per page returned (default 100)
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --page int        Query a specific page of paginated results (default 1)
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
     