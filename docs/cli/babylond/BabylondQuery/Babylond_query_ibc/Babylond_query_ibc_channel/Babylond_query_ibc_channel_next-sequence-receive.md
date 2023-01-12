---
id: Babylond_query_ibc_channel_next-sequence-receive
sidebar_label: babylond query ibc channel next-sequence-receive
hide_table_of_contents: true

---

# babylond query ibc channel next-sequence-receive
Query the next receive sequence for the specified channel.
## query ibc channel next-sequence-receive command
```
babylond query ibc channel next-sequence-receive [port-id] [channel-id] [flags]
```
### Example Command
```
$ babylond query ibc channel next-sequence-receive [port-id] [channel-id]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for next-sequence-receive
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --prove           show proofs for the query results (default true)
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```