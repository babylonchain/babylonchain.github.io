---
id: babylond_query_slashing_signing-info
sidebar_label: Babylond_query_slashing_signing-info
hide_table_of_contents: true

---

# Babylond Query slashing signing-info
Querying a validator’s signing information by the specified consensus key.
## query slashing params signing-info command
```
babylond query slashing signing-info [validator-conspub] [flags]
```
### Example Command
```
$ babylond query slashing signing-info '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"123iojkhKbN5Lx3fJL689cikXBqe+hcp6Y+x0rIK78jHKL="}'
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for signing-info
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