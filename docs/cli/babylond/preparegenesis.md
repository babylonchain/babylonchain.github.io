---
id: preparegenesis
sidebar_label: babylond prepare-genesis
hide_table_of_contents: true

---

# babylond prepare-genesis
Create and prepare a genesis file.
## prepare-genesis command
```
babylond prepare-genesis <testnet|mainnet> <chain-id> [flags]
```
## Options
```
      --btc-base-header string          Hex of the base Bitcoin header. (default "0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a45068653ffff7f2002000000")
      --btc-base-header-height uint     Height of the base Bitcoin header.
      --btc-confirmation-depth uint     Confirmation depth for Bitcoin headers. (default 6)
      --btc-finalization-timeout uint   Finalization timeout for Bitcoin headers. (default 20)
      --chain-id string                 genesis file chain-id, if left blank will be randomly created
      --epoch-interval uint             Number of blocks between epochs. Must be more than 0. (default 400)
      --genesis-time int                Genesis time (default 1671701459)
  -h, --help                            help for prepare-genesis
      --home string                     The application home directory (default "/home/<yourSystemUsername>/.babylond")
      --max-active-validators uint32    Maximum number of validators. (default 10)
```
## Options Inherited from Parent Commands
```
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```