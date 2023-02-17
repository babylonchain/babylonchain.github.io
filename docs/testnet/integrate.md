---
id: czintegrate
sidebar_label: Integrating with Babylon
hide_table_of_contents: true
---

# Integrating with Babylon

Learn how to integrate a Cosmos Zone with Babylon.

---

At the moment, Babylon provides a canonical chain oracle for each integrated Cosmos zone, and allows anyone to query the canonical chains of integrated Cosmos zones and query the fork headers created by a validator set with dishonest majority.
In the future, integrating Babylon will allows Cosmos zones to raise alarms upon dishonest majority attacks, and reduce the unbonding time.

In order to integrate a Cosmos zone to Babylon, the first option would be sending an email to [the Babylon team](mailto:admin@babylonchain.io), then the Babylon team will deploy a relayer for your blockchain.
Alternatively, anyone can integrate any Cosmos zone to Babylon by running an IBC relayer specialized for Babylon.
The special IBC relayer uses a subset of the IBC protocol, and there is no need to modify the integrated Cosmos zone's code, or have tokens in the integrated Cosmos zone.

## Babylon IBC relayer

In order to provide a canonical chain oracle for Cosmos zones, Babylon only needs to use a subset of IBC protocols.
Specifically, Babylon needs to maintain an IBC light client for the integrated Cosmos zone, but not the other way.
However, existing relayers, including the [Go relayer](https://github.com/cosmos/relayer) and the Rust Hermes relayer, are designed for the full IBC protocol stack with an emphasis on IBC packets, thus only provide functionalities for updating both IBC clients in two Cosmos zones and relaying IBC packets among them.

To this end, the Babylon team has developed a special IBC relayer based on [the official IBC relayer in Golang](https://github.com/cosmos/relayer).
The special IBC relayer allows one to maintain an IBC light client of a Cosmos zone in Babylon, and periodically forward headers of the Cosmos zone to Babylon.
It gives us the following advantages:

- Integrating a Cosmos zone to Babylon only needs Babylon accounts and tokens. Accounts and tokens of integrated Cosmos zones are not needed.
- Integrating a Cosmos zone to Babylon incurs zero computational or storage overhead on integrated Cosmos zones.

## Running a Babylon IBC relayer

![integration](./images/integrating.png#left)


Running a Babylon IBC relayer consists of the following steps:

1. Create a Babylon Account
2. Obtain Babylon Tokens
3. Install the Babylon Relayer
5. Configure the Babylon Relayer
6. Restore the Babylon Account to the Babylon Relayer
7. Start the Babylon Relayer

### Create a Babylon Account

To create a Babylon account, 

```bash
$ babylond keys add $BABYLON_KEY_NAME --chain-id $BABYLON_CHAIN_ID --node $BABYLON_RPC_NODE
```

where `$BABYLON_KEY_NAME` is a name you pick for the Babylon key, `$BABYLON_CHAIN_ID` is the chain ID of Babylon, and `$BABYLON_RPC_NODE` is the RPC endpoint of a Babylon node.

The command will return the secret key, address and the mnemonics.
Please keep the secret key in a secret place.

### Obtain Babylon Tokens

Then, you need to obtain some Babylon tokens for the address in order to run the relayer.
The testnet tokens can be obtained from the faucet.

### Install the Babylon Relayer

The Babylon relayer is located at https://github.com/babylonchain/babylon-relayer.
Please follow the documentation for installing it.
To summary, under the `babylon-relayer/` folder,

```bash
$ make build install
```

### Configure the Babylon Relayer

The default Babylon config file will be located at `~/.relayer/config/config.yaml`.
An example config file for integrating Osmosis testnet is as follows:
```yaml
global:
    api-listen-addr: :5183
    timeout: 20s
    memo: ""
    light-cache-size: 10
chains:
    babylon:
        type: cosmos
        value:
            key: babylon-key      # REPLACEME: Nane of the key in the keyring (same as the one added on the bootrapping script by `keys add`.
            chain-id: bbn-demo1   # REPLACEME: Chain ID for the network you're connecting to. NOTE: this chain-id should be the same as the directory that contains the test keyring, i.e. if bbn-demo1, then `relayer-home/keys/bbn-demo1` should contain the `keyring-test` directory with a key with the same name as the above attribute.
            rpc-addr: http://rpc0.demo.babylonchain.io:26657 # REPLACEME: Address to which an RPC connection can be made
            account-prefix: bbn
            keyring-backend: test
            gas-adjustment: 1.5
            gas-prices: 0.002ubbn
            min-gas-amount: 0
            debug: true
            timeout: 10s
            output-format: json
            sign-mode: direct
            extra-codecs: []
    osmosis:
        type: cosmos
        value:
            chain-id: osmo-test-4                                        # REPLACEME: Chain ID for the network you're connecting to.
            rpc-addr: https://osmosis-testnet-rpc.allthatnode.com:26657/ # REPLACEME: Address to which an RPC connection can be made
            keyring-backend: test
            timeout: 10s
paths:
    osmosis:
        src:
            chain-id: bbn-demo1
        dst:
            chain-id: osmo-test-4
```

### Restore the Babylon Account to the Babylon Relayer

To restore the Babylon account to the Babylon relayer,

```bash
$ babylon-relayer keys restore $BABYLON_CHAIN_ID testkey "$MNEMONICS"
```

where `$BABYLON_CHAIN_ID` is the chain ID of Babylon and `$MNEMONICS` is the mnemonics generated when creating the Babylon account.

### Start the Babylon Relayer

To start the Babylon relayer,

```bash
$ babylon-relayer keep-update-clients --interval $INTERVAL
```

where `$INTERVAL` is the interval for relaying a header (e.g., `10m` to denote 10 minutes per header).

### Check if the Integration is Successful

After the above steps, the Cosmos zone has been integrated to Babylon.
You can do the following things to check the status of the integration:
- Check the API http://rpc0.demo.babylonchain.io:1317/babylon/zoneconcierge/v1/chain_info/<your_chain_id> that shows the information of the Cosmos zone in Babylon's view
- Check whether BabylonScan shows the information of the Cosmos zone or not.
  - NOTE: one needs to submit a PR to Babylon's chain registry in order to be shown on BabylonScan

## Future Integration Phases

In the future, Babylon will enable further integration phases, such as raising alarms upon dishonest majority attacks and reducing the unbonding time period.
Such integrations will need IBC packets, thus require using the original IBC relayer rather than the above specialized one.
Please see [Zone Concierge](../modules/czconcierge.md) for more details.