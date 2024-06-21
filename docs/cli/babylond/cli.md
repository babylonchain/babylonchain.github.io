---
id: cli
sidebar_label: CLI Command Overview
hide_table_of_contents: true

---

# CLI Command Overview

- [babylond](babylond.md) - Babylon App

    - [add-genesis-account](babylondaddgenesisaccount.md) -This is a Cosmos Native CLI, it adds a genesis account to genesis.json

    - [add-genesis-bls](babylondaddgenesisbls.md) -This is a Babylon-specific CLI, it adds a genesis BLS Key to genesis.json

    - [collect-gentxs](babylondcollectgentxs.md) - This is a Cosmos Native CLI, it collects genesis txs and outputs a genesis.json file

    - [config](babylondconfig.md) - This is a Cosmos Native CLI, it creates or queries an application CLI configuration file

    - [create-bls-key](babylondcreatebls.md) - This is a Babylon-specific CLI, it creates a pair of BLS keys for a validator

    - [create-genesis-bls](babylondcreategenesiskey.md) - This is a Babylon-specific CLI, it creates a genesis BLS key file for the validator

    - [debug](debug/babylonddebug.md) - This is a Cosmos Native CLI, it is a tool for helping with debugging your application

        - [addr](debug/babylonddebugaddr.md) - Convert an address between hex and bech32

        - [pubkey](debug/babylondebugpubkey.md) - Decode a pubkey from proto JSON

        - [pubkey-raw](debug/babylonddebugpubkeyraw.md) - Decode a ED25519 or secp256k1 pubkey from hex, base64, or bech32

        - [raw-bytes](debug/babylonddebugrawbytes.md) - Convert raw bytes output (eg. [10 21 13 255]) to hex

    - [export](babylondexport.md) - This is a Cosmos Native CLI, it exports the state to JSON

    - [gentx](babylondgentx.md) -  This is a Cosmos Native CLI, it generates a genesis tx carrying a self delegation

    - [help](babylondhelp.md) - This is a Cosmos Native CLI, it helps with any command

    - [init](babylondinit.md) - This is a Cosmos Native CLI, it initializes the private validator, p2p, genesis, and application configuration files

    - [keys](keys/babylondkeys.md) - This is a Cosmos Native CLI, it manages your application’s keys

        - [add](keys/babylondkeysdd.md) - Add an encrypted private key (either newly generated or recovered), encrypt it, and save to your file name

        - [delete](keys/babylondkeysdelete.md) - Delete the given keys

        - [export](keys/babylonkeysexport.md) - Export private keys

        - [import](keys/babylondkeysimport.md) - Import private keys into the local keybase

        - [list](keys/babylondkeyslist.md) - List all keys

        - [migrate](keys/babylondkeysmigrate.md) - Migrate keys from amino to proto serialization format

        - [mnemonic](keys/babylondkeysmnemonic.md) - Compute the bip39 mnemonic for some input entropy

        - [parse](keys/babylondkeysparse.md) - Parse address from hex to bech32 and vice versa

        - [rename](keys/babylondkeysrename.md) - Rename an existing key

        - [show](keys/babylondkeysshow.md) - Retrieve key information by name or address

    - [migrate](migrate.md) - This is a Cosmos Native CLI, it migrates genesis to a specified target version

    - [prepare-genesis](preparegenesis.md) - This is a Babylon-specific CLI, it prepares a genesis file

    - [query](Babylond_query.md) - Querying subcommand

        - [account](BabylondQuery/Babylond_query_account.md) - This is a Cosmos Native CLI, it queries for an account by address

        - [auth](BabylondQuery/Babylond_query_auth.md) - This is a Cosmos Native CLI, it queries commands for the auth module

            - [account](BabylondQuery/Babylond_query_auth/Babylond_query_auth_account.md) - Query for account by address

            - [accounts](BabylondQuery/Babylond_query_auth/Babylond_query_auth_accounts.md) - Query all the accounts

            - [address-by-acc-num](BabylondQuery/Babylond_query_auth/Babylond_query_auth_address_by_acc_num.md) - Query for an address by account number

            - [module-account](BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_account.md) - Query module account info by module name

            - [module-accounts](BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_accounts.md) - Query all the module accounts

            - [params](BabylondQuery/Babylond_query_auth/Babylond_query_auth_params.md) - Query the current auth parameters

        - [authz](BabylondQuery/Babylond_query_authz.md) - This is a Cosmos Native CLI, it queries commands for the authz module

            - [grants](BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants.md) - Query grans for a granter-grantee pair and optionally a msg-type-url

                - [grants-by-grantee](BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/Babylond_query_authz_grants_by_grantee.md) - Query authorization grants granted to a grantee

                - [grants-by-granter](BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/Babylond_query_authz_grants_by_granter.md) - Query authorization grants granted by granter

        - [bank](BabylondQuery/Babylond_query_bank.md) - This is a Cosmos Native CLI, it queries commands for the bank module

            - [balances](BabylondQuery/Babylond_query_bank/Babylond_query_bank_balances.md) - Query for account balances by address

            - [denom-metadata](BabylondQuery/Babylond_query_bank/Babylond_query_bank_denom_metadata.md) - Query the client metadata for coin denominations

            - [total](BabylondQuery/Babylond_query_bank/Babylond_query_bank_total.md) - Query the total supply of coins of the chain

        - [block](BabylondQuery/Babylond_query_block.md) - This is a Cosmos Native CLI, it gets the verified data by the given height

        - [btccheckpoint](BabylondQuery/Babylond_query_btccheckpoint.md) - This is a Babylon-specific CLI, it queries commands for the btccheckpoint module

            - [btc-height](BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_btc-height.md) - Retrieve the earliest btc height for the given epoch

            - [epoch-submissions](BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_epoch_submissions.md) - All the checkpoint submissions for the given epoch

            - [params](BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_params.md) - Show the parameters of the module

        - [btclightclient](BabylondQuery/Babylond_query_btclightclient.md) - This is a Babylon-specific CLI, it queries commands for the btclightclient module

            - [base-header](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_base-header.md) - Retrieve the base header of the bitcoin blockchain

            - [contains](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_contains.md) - Check whether the module maintains a hash

            - [hashes](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_hashes.md) - Retrieve the hashes maintained by this module

            - [main-chain](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain.md) - Retrieve the canonical chain

            - [params](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_params.md) - Show the parameters of the module

            - [tip](BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_tip.md) - Retrieve the tip of the bitcoin blockchain

        - [checkpointing](BabylondQuery/Babylond_query_checkpointing.md) - This is a Babylon-specific CLI, it queries commands for the checkpointing module

            - [params](BabylondQuery/Babylond_query_checkpointing/Babylond_query_checkpointing_params.md) - Show the parameters of the module

            - [raw-checkpoint](BabylondQuery/Babylond_query_checkpointing/Babylond_query_checkpointing_raw-checkpoint.md) - Retrieve the checkpoint by epoch number

            - [raw-checkpoint-list](BabylondQuery/Babylond_query_checkpointing/Babylond_query_checkpointing_raw-checkpoint/Babylond_query_checkpointing_raw-checkpoint_list.md) - Retrieve the checkpoints by status

        - [distribution](BabylondQuery/Babylond_query_distribution.md) - This is a Cosmos Native CLI, it queries commands for the distribution module

            - [commission](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_commission.md) - Query distribution validator commission

            - [community-pool](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_community-pool.md) - Query the amount of coins in the community pool

            - [params](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_params.md) - Query distribution params

            - [rewards](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_rewards.md) - Query all distribution delegator rewards or rewards from a particular validator

            - [slashes](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_slashes.md) - Query distribution validator slashes

            - [validator-outstanding-rewards](BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_validator_outstanding_rewards.md) - Query distribution outstanding (un-withdrawn) rewards for validator and all their delegations

        - [epoching](BabylondQuery/Babylond_query_epoching.md) - This is a Babylon-specific CLI, it queries commands for the epoching module

            - [params](BabylondQuery/Babylond_query_epoching/Babylond_query_epoching_params.md) - shows the parameters of the module

        - [evidence](BabylondQuery/Babylond_query_evidence.md)  - This is a Cosmos Native CLI, it queries commands for evidence by a hash or for all the paginated submitted evidence

        - [feegrant](BabylondQuery/Babylon_query_freegrant.md) - This is a Cosmos Native CLI, it queries commands for the feegrant module

            - [grant](BabylondQuery/Babylond_query_freegrant/Babylond_query_freegrant_grant.md) - Query details of a single grant

            - [grants-by-grantee](BabylondQuery/Babylond_query_freegrant/Babylond_query_freegrant_grants-by-grantee.md) - Query all grants of a grantee

            - [grants-by-granter](BabylondQuery/Babylond_query_freegrant/Babylond_query_freegrant_grants-by-granter.md) - Query all grants by a granter

        - [gov](BabylondQuery/Babylond_query_gov.md) - This is a Cosmos Native CLI, it queries commands for the governance module

            - [deposit](BabylondQuery/Babylond_query_gov/Babylond_query_gov_deposit.md) - Query details of a deposit

            - [deposits](BabylondQuery/Babylond_query_gov/Babylond_query_gov_deposits.md) - Query deposits on a proposal

            - [param](BabylondQuery/Babylond_query_gov/Babylond_query_gov_param.md) - Query the parameters (voting|tallying|deposit) of the governance process

            - [params](BabylondQuery/Babylond_query_gov/Babylond_query_gov_params.md) - Query the parameters of the governance process

            - [proposal](BabylondQuery/Babylond_query_gov/Babylond_query_gov_proposal.md) - Query details of a single proposal

            - [proposals](BabylondQuery/Babylond_query_gov/Babylond_query_gov_proposals.md) - Query proposals with optional filters

            - [proposer](BabylondQuery/Babylond_query_gov/Babylond_query_gov_proposer.md) - Query the proposer of a governance proposal

            - [tally](BabylondQuery/Babylond_query_gov/Babylond_query_gov_tally.md) - Get the tally of a proposal vote

            - [vote](BabylondQuery/Babylond_query_gov/Babylond_query_gov_vote.md) - Query details of a single vote

            - [votes](BabylondQuery/Babylond_query_gov/Babylond_query_gov_votes.md) - Query votes on a proposal

        - [ibc](BabylondQuery/Babylon_query_ibc.md) - This is a Cosmos Native CLI, it queries commands for the IBC module

            - [channel](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel.md) - IBC channel query subcommands

                - [channels](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels.md) - Query all channels

                - [client-state](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_client-state.md) - Query the client state associated with a channel

                - [connections](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_connections.md) - Query all channels associated with a connection

                - [end](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_end.md) - Query a channel end

                - [next-sequence-receive](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive.md) - Query a next-receive sequence

                - [packet-ack](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-ack.md) - Query a packet acknowledgement

                - [packet-commitment](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitment.md) - Query a packet commitment

                - [packet-commitments](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments.md) - Query all packet commitments associated with a channel

                - [packet-receipt](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-receipt.md) - Query a packet receipt

                - [unreceived-acks](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_unreceived-acks.md) - Query all the unreceived acks associated with a channel

                - [unreceived-packets](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_unreceived-packets.md) - Query all the unreceived packets associated with a channel

            - [client](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client.md) - IBC client query subcommands

                - [consensus-state](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state.md) - Query the consensus state of a client at a given height

                - [consensus-state-heights](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights.md) - Query the heights of all consensus states of a client.

                - [consensus-states](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-states.md) - Query all the consensus states of a client.

                - [header](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_header.md) - Query the latest header of the running chain

                - [params](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_params.md) - Query the current ibc client parameters

                - [self-consensus-state](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_self-consensus-state.md) - Query the self-consensus state for this chain

                - [state](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_state.md) - Query a client state

                - [states](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_states.md) - Query all available light clients

                - [status](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status.md) - Query client status

            - [connection](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection.md) - IBC connection query subcommands

                - [connections](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_connections.md) - Query all connections

                - [end](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_end.md) - Query stored connection end

                - [path](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_path.md) - Query stored client connection paths

        - [ibc-transfer](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer.md) - This is a Cosmos Native CLI, it queries the subcommands for the ibc fungible token transfer module

            - [denom-hash](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash.md) - Query the denom hash info from a given denom trace

            - [denom-trace](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-trace.md) - Query the denom trace info from a given trace hash or ibc denom

            - [denom-traces](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-traces.md) - Query the trace info for all token denominations

            - [escrow-address](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_escrow-address.md) - Get the escrow address for a channel

            - [params](BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_params.md) - Query the current ibc-transfer parameters

        - [mint](BabylondQuery/Babylond_query_mint.md) - This is a Cosmos Native CLI, it queries commands for the minting module

            - [annual-provisions](BabylondQuery/Babylond_query_mint/Babylond_query_mint_annual-provisions.md) - Query the current minting annual provisions value

            - [inflation](BabylondQuery/Babylond_query_mint/Babylond_query_mint_inflation.md) - Query the current minting inflation value

            - [params](BabylondQuery/Babylond_query_mint/Babylond_query_mint_params.md) - Query the current minting parameters

        - [params](BabylondQuery/Babylond_query_params.md) - This is a Cosmos Native CLI, it queries commands for the params module

            - [subspace](BabylondQuery/Babylond_query_params/Babylond_query_params_subspace.md) - Query for raw parameters by subspace and key

        - [slashing](BabylondQuery/Babylond_query_slashing.md) - This is a Cosmos Native CLI, it queries commands for the slashing module

            - [params](BabylondQuery/Babylond_query_slashing/Babylond_query_slashing_params.md) - Query the current slashing parameters

            - [signing-info](BabylondQuery/Babylond_query_slashing/Babylond_query_slashing_signing-info.md) - Query a validator's signing information

            - [signing-infos](BabylondQuery/Babylond_query_slashing/Babylond_query_slashing_signing-infos.md) - Query signing information of all validators

        - [staking](BabylondQuery/Babylond_query_staking.md) - This is a Cosmos Native CLI, it queries commands for the staking module

            - [delegation](BabylondQuery/Babylond_query_staking/Babylond_query_staking_delegation.md) - Query a delegation based on address and validator address

            - [delegations](BabylondQuery/Babylond_query_staking/Babylond_query_staking_delegations.md) - Query all delegations made by one delegator

            - [delegations-to](BabylondQuery/Babylond_query_staking/Babylond_query_staking_delegations-to.md) - Query all delegations made to one validator

            - [historical-info](BabylondQuery/Babylond_query_staking/Babylond_query_staking_historical-info.md) - Query historical info at a given height

            - [params](BabylondQuery/Babylond_query_staking/Babylond_query_staking_params.md) - Query the current staking parameters information

            - [pool](BabylondQuery/Babylond_query_staking/Babylond_query_staking_pool.md) - Query the current staking pool values

            - [redelegation](BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation.md) - Query a redelegation record based on the delegator and a source and destination validator address

            - [redelegations](BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegations.md) - Query all redelegations records for one delegator

            - [redelegations-from](BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation-from.md) - Query all outgoing redelegations from a validator

            - [unbonding-delegation](BabylondQuery/Babylond_query_staking/Babylond_query_staking_unbounding-delegation.md) - Query an unbonding-delegation record based on the delegator and validator address

            - [unbonding-delegations](BabylondQuery/Babylond_query_staking/Babylond_query_staking_unbounding-delegations.md) - Query all unbonding-delegations records for one delegator

            - [unbonding-delegations-from](BabylondQuery/Babylond_query_staking/Babylond_query_staking_unbounding-delegations-from.md) - Query all unbonding delegations from a validator

            - [validator](BabylondQuery/Babylond_query_staking/Babylond_query_staking_validator.md) - Query a validator

            - [validators](BabylondQuery/Babylond_query_staking/Babylond_query_staking_validators.md) - Query for all validators

        - [tendermint-validator-set](BabylondQuery/Babylond_query_tendermint-validator-set.md) - Get the full tendermint validator set at a given height

        - [tx](BabylondQuery/Babylond_query_tx.md)  - This is a Cosmos Native CLI, it queries  a transaction by hash 

        - [txs](BabylondQuery/Babylond_query_txs.md) - This is a Cosmos Native CLI, it queries paginated transactions that match a set of events

        - [upgrade](BabylondQuery/Babylond_query_upgrade.md) - This is a Cosmos Native CLI, it queries commands for the upgrade module

            - [applied](BabylondQuery/Babylond_query_upgrade/Babylond_query_upgrade_applied.md) - Block header for height at which a completed upgrade was applied

            - [module_versions](BabylondQuery/Babylond_query_upgrade/Babylond_query_upgrade_module_versions.md) - Get the list of module versions

            - [plan](BabylondQuery/Babylond_query_upgrade/Babylond_query_upgrade_plan.md) - Get upgrade plan (if one exists)

        - [zoneconcierge](BabylondQuery/Babylond_query_zoneconcierge.md) - This is a Babylon-specific CLI, it queries commands for the zoneconcierge module

            - [params](BabylondQuery/Babylond_query_zoneconcierge/Babylond_query_zoneconcierge_params.md) - Show the parameters of the module

    - [rollback](Babylond_rollback.md) - This is a Cosmos Native CLI, it rolls back cosmos-sdk and tendermint state by one height

    - [rosetta](Babylond_rosetta.md) - This is a Cosmos Native CLI, it spins up a rosetta server

    - [start](Babylond_start.md) - This is a Cosmos Native CLI, it runs the full node

    - [status](Babylond_status.md) - This is a Cosmos Native CLI, it queries the remote node for status

    - [tendermint](Babylond_tendermint.md) -This is a Cosmos Native CLI, it queries the subcommands for tendermint module

        - [reset-state](Babylond_tendermint/Babylond_tendermint_reset-state.md) - Remove all the data and WAL

        - [show-address](Babylond_tendermint/Babylond_tendermint_show-address.md) - Shows this node's tendermint validator consensus address

        - [show-node-id](Babylond_tendermint/Babylond_tendermint_show-node-id.md) - Show this node's ID

        - [show-validator](Babylond_tendermint/Babylond_tendermint_show-validator.md) - Show this node's tendermint validator info

        - [unsafe-reset-all unsafe](Babylond_tendermint/Babylond_tendermint_unsafe-reset-all.md) - Remove all the data and WAL, reset this node's validator to the genesis state

        - [version](Babylond_tendermint/Babylond_tendermint_version.md) - Print tendermint libraries' version

    - [testnet](Babylond_testnet.md) - This is a Babylon-specific CLI, it initialize files for a Babylon testnet

    - [tx](Babylond_tx.md) - Transactions subcommand

        - [authz](Babylond_tx/Babylon_tx_authz.md) - This is a Cosmos Native CLI, it queries the subcommands for authorization transactions 

            - [exec](Babylond_tx/Babylond_tx_authz/Babylond_tx_authz_exec.md) - execute tx on behalf of granter account

            - [grant](Babylond_tx/Babylond_tx_authz/Babylond_tx_authz_grant.md) - Grant authorization to an address

            - [revoke](Babylond_tx/Babylond_tx_authz/Babylond_tx_authz_revoke.md) - revoke authorization

        - [bank](Babylond_tx/Babylond_tx_bank.md) - This is a Cosmos Native CLI, it queries subcommand for Bank module 

            - [multi-send](Babylond_tx/Babylond_tx_bank/Babylond_tx_bank_multi-send.md) - Send funds from one account to two or more accounts.

            - [send](Babylond_tx/Babylond_tx_bank/Babylond_tx_bank_send.md) - Send funds from one account to another.

        - [broadcast](Babylond_tx/Babylond_tx_broadcast.md) - This is a Cosmos Native CLI, it broadcast transactions generated offline

        - [btccheckpoint](Babylond_tx/Babylond_tx_btccheckpoint.md) - This is a Babylon-specific CLI, it queries subcommands for btccheckpoint transactions

        - [btclightclient](Babylond_tx/Babylond_tx_btclightclient.md) - This is a Babylon-specific CLI, it queries subcommands for btclightclient transactions

            - [insert-header](Babylond_tx/Babylond_tx_btclightclient/Babylond_tx_btclightclient_insert-header.md) - Submit BTC header bytes

        - [checkpointing](Babylond_tx/Babylond_tx_checkpointing.md) - This is a Babylon-specific CLI, it queries subcommands for checkpointing transactions

            - [create-validator](Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_create-validator.md) - Create a new validator initialized with a self-delegation to it

            - [submit](Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_submit.md) - submit a BLS signature

        - [crisis](Babylond_tx/Babylond_tx_crisis.md) - This is a Cosmos Native CLI, it queries subcommand for crisis transactions 

            - [invariant-broken](Babylond_tx/Babylond_tx_crisis/Babylond_tx_crisis_invariant-broken.md) - Submit proof that an invariant broken to halt the chain

        - [decode](Babylond_tx/Babylon_tx_decode.md) - This is a Cosmos Native CLI, it decodes a binary encoded transaction string 

        - [distribution](Babylond_tx/Babylond_tx_distribution.md) - This is a Cosmos Native CLI, it queries subcommand for Distribution transactions 

            - [fund-community-pool](Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_fund-community-pool.md) - Funds the community pool with the specified amount

            - [set-withdraw-addr](Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_set-withdraw-addr.md) - Change the default withdraw address for rewards associated with an address

            - [withdraw-all-rewards](Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_withdraw-all-rewards.md) - Withdraw all delegations rewards for a delegator

            - [withdraw-rewards](Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_withdraw-rewards.md) - Withdraw rewards from a given delegation address and optionally withdraw validator commission if the delegation address given is a validator operator

        - [encode](Babylond_tx/Babylond_tx_encode.md) - This is a Cosmos Native CLI, it encodes transactions generated offline 

        - [epoching](Babylond_tx/Babylond_tx_epoching.md) - This is a Babylon-specific CLI, it queries the subcommands for epoching transactions 

            - [delegate](Babylond_tx/Babylond_tx_epoching/Babylond_tx_epoching_delegate.md) - Delegate liquid tokens to a validator

            - [redelegate](Babylond_tx/Babylond_tx_epoching/Babylond_tx_epoching_redelegate.md) - Redelegate illiquid tokens from one validator to another

            - [unbond](Babylond_tx/Babylond_tx_epoching/Babylond_tx_epoching_unbond.md) - Unbond shares from a validator

        - [evidence](Babylond_tx/Babylond_tx_evidence.md) - This is a Cosmos Native CLI, it queries the subcommands for Evidence transactions 

        - [feegrant](Babylond_tx/Babylond_tx_feegrant.md) - This is a Cosmos Native CLI, it queries the subcommands for Feegrant transactions 

            - [grant](Babylond_tx/Babylond_tx_feegrant/Babylond_tx_feegrant_grant.md) - Grant Fee allowance to an address

            - [revoke](Babylond_tx/Babylond_tx_feegrant/Babylond_tx_feegrant_revoke.md) - Revoke fee-grant

        - [gov](Babylond_tx/Babylond_tx_gov.md) - This is a Cosmos Native CLI, it queries subcommand for governance transactions 

            - [deposit](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_deposit.md) - Deposit tokens for an active proposal

            - [draft-proposal](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_draft-proposal.md) - Generate a draft proposal JSON file. The generated proposal JSON contains only one message (skeleton).

            - [submit-legacy-proposal](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_submit-legacy-proposal.md) - Submit a legacy proposal along with an initial deposit

                - [cancel-software-upgrade](Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_cancel.md) - Cancel the current software upgrade proposal

                - [community-pool-spend](Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_community.md) - Submit a community pool spend proposal

                - [param-change](Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_param.md) - Submit a parameter change proposal

                - [software-upgrade](Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_software-upgrade.md) - Submit a software upgrade proposal

            - [submit-proposal](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_submit-proposal.md) - Submit a proposal along with some messages, metadata and deposit

            - [vote](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_vote.md) - Vote for an active proposal, options: yes/no/no_with_veto/abstain

            - [weighted-vote](Babylond_tx/Babylond_tx_gov/Babylond_tx_gov_weighted-vote.md) - Vote for an active proposal, options: yes/no/no_with_veto/abstain

        - [ibc](Babylond_tx/Babylond_tx_ibc.md) - This is a Cosmos Native CLI, it queries subcommands for IBC transactions

            - [channel](Babylond_tx/Babylond_tx_ibc/Babylond_tx_ibc_channel.md) - IBC channel transaction subcommands

            - [client](Babylond_tx/Babylond_tx_ibc/Babylond_tx_ibc_client.md) - IBC client transaction subcommands

                - [create](Babylond_tx/Babylond_tx_ibc/client/Babylond_tx_ibc_client_create.md) - create new IBC client

                - [misbehaviour](Babylond_tx/Babylond_tx_ibc/client/Babylond_tx_ibc_client_misbehaviour.md) - submit a client misbehaviour

                - [update](Babylond_tx/Babylond_tx_ibc/client/Babylond_tx_ibc_client_update.md) - update existing client with a header

                - [upgrade](Babylond_tx/Babylond_tx_ibc/client/Babylond_tx_ibc_client_upgrade.md) - upgrade an IBC client

        - [ibc-transfer](Babylond_tx/Babylond_tx_ibc-transfer.md) - This is a Cosmos Native CLI, it queries the subcommands for IBC fungible token transfer 

            - [transfer](Babylond_tx/Babylond_tx_ibc-transfer/Babylond_tx_ibc-transfer_transfer.md) - Transfer a fungible token through IBC

        - [multi-sign](Babylond_tx/Babylond_tx_multi-sign.md) - This is a Cosmos Native CLI, it generates multisig signatures for transactions generated offline

            - [multisign-batch](Babylond_tx/Babylond_tx_multi-sign/Babylond_tx_multi-sign-batch.md) - This is a Cosmos Native CLI, it assembles multisig transactions in batch from batch signatures

        - [sign](Babylond_tx/Babylond_tx_sign.md) - This is a Cosmos Native CLI, it signs a transaction generated offline

            - [sign-batch](Babylond_tx/Babylond_tx_sign/Babylond_tx_sign-batch.md) - This is a Cosmos Native CLI, it signs transaction batch files

        - [slashing](Babylond_tx/Babylond_tx_slashing.md) - This is a Cosmos Native CLI, it queries subcommand for slashing transaction

            - [unjail](Babylond_tx/Babylond_tx_slashing/Babylond_tx_slashing_unjail.md) - Unjail validator previously jailed for downtime

        - [staking](Babylond_tx/Babylond_tx_staking.md) - This is a Cosmos Native CLI, it queries subcommand for Staking transaction

            - [cancel-unbond](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_cancel-unbond.md) - Cancel unbonding delegation and delegate back to the validator

            - [create-validator](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_create-validator.md) - Create new validator initialized with a self-delegation to it

            - [delegate](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_delegate.md) - Delegate liquid tokens to a validator

            - [edit-validator](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_edit-validator.md) - Edit an existing validator account

            - [redelegate](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_redelegate.md) - Redelegate illiquid tokens from one validator to another

            - [unbond](Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_unbond.md) - Unbond shares from a validator

        - [validate-signatures](Babylond_tx/Babylond_tx_validate-signatures.md) - This is a Cosmos Native CLI, it validates transactions signatures

        - [vesting](Babylond_tx/Babylond_tx_vesting.md) - This is a Cosmos Native CLI, it queries the subcommands for Vesting transaction 

            - [create-periodic-vesting-account](Babylond_tx/Babylond_tx_vesting/Babylond_tx_vesting_create-periodic-vesting-account.md) - Create a new vesting account funded with an allocation of tokens

            - [create-permanent-locked-account](Babylond_tx/Babylond_tx_vesting/Babylond_tx_vesting_create-permanent-locked-account.md) - Create a new permanently locked account funded with an allocation of tokens

            - [create-vesting-account](Babylond_tx/Babylond_tx_vesting/Babylond_tx_vesting_create-vesting-account.md) - Create a new vesting account funded with an allocation of tokens

        - [zoneconcierge](Babylond_tx/Babylond_tx_zoneconcierge.md) - This is a Babylon-specific CLI, it queries the subcommands for zoneconcierge transactions

    - [validate-genesis](Babylond_validate-genesis.md) - This is a Cosmos Native CLI, it validates the genesis file at the default location or at the location passed as an arg
    
    - [version](Babylond_version.md) - This is a Cosmos Native CLI, it prints the application binary version information
