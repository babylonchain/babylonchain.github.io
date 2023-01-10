---
id: babylond_query_checkpointing_raw-checkpoint_list
sidebar_label: Babylond_query_checkpointing_raw-checkpoint_list
hide_table_of_contents: true

---

# Babylond Query checkpointing raw-checkpoint list
Retrieve the checkpoint by the given status.
## query checkpointing raw-checkpointing-list command
```
babylond query checkpointing raw-checkpoint-list [status] [flags]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for raw-checkpoint-list
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