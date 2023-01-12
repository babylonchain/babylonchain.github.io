---
id: babylondkeysdelete
sidebar_label: babylond keys delete
hide_table_of_contents: true

---

# babylond keys delete
Delete the given keys from the keyring database record. This command will only remove the public key that is stored locally.
## keys delete command
```
babylond keys delete <name>... [flags]
```
## Options
```
-f, --force   Remove the key unconditionally without asking for the passphrase. Deprecated.
-h, --help    help for delete
-y, --yes     Skip confirmation prompt when deleting offline or ledger key references
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