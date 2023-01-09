---
id: babylondexport
sidebar_label: Babylond_export
hide_table_of_contents: true

---

# Babylond_export
Export state format to JSON format.
## export command
```
babylond export [flags]
```
## Options
```
      --for-zero-height              Export state to start at height zero (perform preproccessing)
      --height int                   Export state from a particular height (-1 means latest height) (default -1)
  -h, --help                         help for export
      --home string                  The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --jail-allowed-addrs strings   Comma-separated list of operator addresses of jailed validators to unjail
```
## Options Inherited from Parent Commands
```
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```