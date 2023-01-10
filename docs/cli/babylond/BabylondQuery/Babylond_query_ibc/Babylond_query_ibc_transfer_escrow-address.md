---
id: Babylond_query_ibc_transfer_escrow-address
sidebar_label: Babylond_query_ibc_transfer_escrow-address
hide_table_of_contents: true

---

# Babylond Query ibc-transfer escrow-address
Get the escrow address for a channel.
## query ibc-transfer escrow-address command
```
babylond query ibc-transfer escrow-address [flags]
```
### Example Command
```
$ babylond query ibc-transfer escrow-address [port] [channel-id]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for escrow-address
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