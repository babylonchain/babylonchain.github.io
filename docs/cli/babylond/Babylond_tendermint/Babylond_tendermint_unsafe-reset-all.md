---
id: babylond_tendermint_unsafe-reset-all
sidebar_label: babylond tendermint unsafe-reset-all(unsafe)
hide_table_of_contents: true

---

# babylond tendermint unsafe-reset-all(unsafe)
Remove all the data, WAL, and reset the node’s validator to the genesis state.
:::info Note

This command is unsafe, proceed with caution!

:::
## tendermint unsafe-reset-all(unsafe) command
```
babylond tendermint unsafe-reset-all [flags]
```
## Options
```
  -h, --help             help for unsafe-reset-all
      --keep-addr-book   keep the address book intact
```
## Options Inherited from Parent Commands
```
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```