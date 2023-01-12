---
id: babylondkeysrename
sidebar_label: babylond keys rename
hide_table_of_contents: true

---

# babylond keys rename
Rename an existing key name that is stored on the local keybase.
## keys rename command
```
babylond keys rename <old_name> <new_name> [flags]
```
## Options
```
  -h, --help   help for rename
  -y, --yes    Skip confirmation prompt when renaming offline or ledger key references

```
## Options Inherited from Parent Commands
```
      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --keyring-backend string   Select keyring's backend (os|file|test) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --log_format string        The logging format (json|plain) (default "plain")
      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --output string            Output format (text|json) (default "text")
      --trace                    print out full stack trace on errors
```