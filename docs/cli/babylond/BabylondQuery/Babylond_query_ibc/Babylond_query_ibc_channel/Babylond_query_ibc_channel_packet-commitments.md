---
id: Babylond_query_ibc_channel_packet-commitments
sidebar_label: Babylond_query_ibc_channel_packet-commitments
hide_table_of_contents: true

---

# Babylond Query ibc channel packet-commitments
Query all packet commitments associated with the specified channel.
## query ibc channel packet-commitments command
```
babylond query ibc channel packet-commitments [port-id] [channel-id] [flags]
```
### Example Command
```
$ babylond query ibc channel packet-commitments [port-id] [channel-id]
```
## Options
```
      --count-total       count total number of records in packet commitments associated with a channel to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for packet-commitments
      --limit uint        pagination limit of packet commitments associated with a channel to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of packet commitments associated with a channel to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of packet commitments associated with a channel to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of packet commitments associated with a channel to query for
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