---
id: babylondcollectgentxs
sidebar_label: Babylond_collect-gentxs
hide_table_of_contents: true

---

# Babylond_collect-gentxs
Collect genesis txs and output a genesis.json file.
## collect-gentxs command
```
babylond collect-gentxs [flags]
```
## Options
```
      --gentx-dir string   override default "gentx" directory from which collect and execute genesis transactions; default [--home]/config/gentx/
  -h, --help               help for collect-gentxs
      --home string        The application home directory (default "/home/<yourSystemUsername>/.babylond")
```
## Options Inherited from Parent Commands
```
--log_format string   The logging format (json|plain) (default "plain")
--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
--trace               print out full stack trace on errors
```