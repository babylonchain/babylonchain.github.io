---
id: babylondkeysexport
sidebar_label: babylond keys export
hide_table_of_contents: true

---

# babylond keys export
Export a private key in encrypted ASCII format from the local keyring. Advanced users should only use this feature if they are comfortable handling private keys and fully aware of their risks.
## keys export command
```
babylond keys export <name> [flags]
```
## Options
```
-h, --help            help for export
      --unarmored-hex   Export unarmored hex privkey. Requires --unsafe.
      --unsafe          Enable unsafe operations. This flag must be switched on along with all unsafe operation-specific options.
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