---
id: babylondkeys
sidebar_label: Babylond_keys
hide_table_of_contents: true

---

# Babylond_keys
Manage the application's keyring. Light clients, full nodes, or any other application that requires a private key can use these keys in any format supported by the Tendermint crypto library.
## keys command
```
babylond keys [command]
```
## Options
```
-h,   --help                     help for keys
      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --keyring-backend string   Select keyring's backend (os|file|test) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --output string            Output format (text|json) (default "text")
```
## Options Inherited from Parent Commands
```
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on e
```