---
id: babylond_testnet
sidebar_label: babylond testnet
hide_table_of_contents: true

---

# babylond testnet
Initialize the files for a Babylon testnet.
## testnet command
```
babylond testnet [flags]
```
## Options
```
      --additional-sender-account       If there should be additional pre funded account per validator
      --algo string                     Key signing algorithm to generate keys for (default "secp256k1")
      --btc-base-header string          Hex of the base Bitcoin header. (default "0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a45068653ffff7f2002000000")
      --btc-base-header-height uint     Height of the base Bitcoin header.
      --btc-checkpoint-tag string       Tag to use for Bitcoin checkpoints. (default "bbt0")
      --btc-confirmation-depth uint     Confirmation depth for Bitcoin headers. (default 6)
      --btc-finalization-timeout uint   Finalization timeout for Bitcoin headers. (default 20)
      --btc-network string              Bitcoin network to use. Available networks: simnet, testnet, regtest, mainnet (default "simnet")
      --chain-id string                 genesis file chain-id, if left blank will be randomly created
      --epoch-interval uint             Number of blocks between epochs. Must be more than 0. (default 400)
      --genesis-time int                Genesis time (default 1672122091)
  -h, --help                            help for testnet
      --keyring-backend string          Select keyring's backend (os|file|test) (default "os")
      --max-active-validators uint32    Maximum number of validators. (default 10)
      --minimum-gas-prices string       Minimum gas prices to accept for transactions; All fees in a tx must meet this minimum (e.g. 0.001bbn) (default "0.000006ubbn")
      --node-daemon-home string         Home directory of the node's daemon configuration (default "babylond")
      --node-dir-prefix string          Prefix the directory name for each node with (node results in node0, node1, ...) (default "node")
  -o, --output-dir string               Directory to store initialization data for the testnet (default "./mytestnet")
      --starting-ip-address string      Starting IP address (192.168.0.1 results in persistent peers list ID0@192.168.0.1:46656, ID1@192.168.0.2:46656, ...) (default "192.168.0.1")
      --v int                           Number of validators to initialize the testnet with (default 4)
```
## Options Inherited from Parent Commands
```
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```