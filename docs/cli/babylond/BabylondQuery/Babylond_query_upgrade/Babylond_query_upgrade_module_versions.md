---
id: babylond_query_upgrade_module_versions
sidebar_label: babylond query upgrade module-versions
hide_table_of_contents: true

---

# babylond query upgrade module-versions
Return the list of module names and their respective consensus versions.
## query upgrade module_versions command
```
babylond query upgrade module_versions [optional module_name] [flags]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for module_versions
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