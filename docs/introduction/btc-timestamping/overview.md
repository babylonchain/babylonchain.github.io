---
id: overview
sidebar_label: Bitcoin Timestamping
hide_table_of_contents: true
---

import Paperclip from "/img/paperclip.svg";

# Bitcoin Timestamping

Babylon's BTC timestamping protocol allows any arbitrary data submitted to Babylon to obtain Bitcoin timestamps.
A primary use case of this protocol is to timestamp PoS blockchains to enhance their integrity and security, such as resisting against long range attacks.
The protocol includes Bitcoin as the timestamping service, the Babylon blockchain as the checkpoint aggregation and data availability service, and other PoS blockchains as the consumers of security.

Such security enables several use cases:

- **Fast Unbonding:** PoS blockchains require social consensus to circumvent long range attacks and this leads to long unbonding periods. Bitcoin security replaces social consensus and reduces unbonding periods to a few hours.
- **Bootstrapping new zones:** Bitcoin security can be used to bootstrap new zones which have low token valuation.
- **Protecting important transactions:** Bitcoin security can be used to protect important transactions while normal transactions get fast finality.
- **Censorship resistance:** Transactions that are censored can use Babylon as a backup to enter the ledger.
- **Bitcoin staking:** Bitcoin timestamping protocol serves as a building block for our [Bitcoin staking protocol](/docs/introduction/btc-staking/overview.md), because it provides synchronization between PoS blockchains and Bitcoin.

In addition, via CosmWasm, one can develop timestamping services with any data verification rules.

<div class="pdf-file-banner">
  <a class="link" target="_blank" href="https://arxiv.org/pdf/2207.08392.pdf">
    <div class="icon-holder">
      <Paperclip class="icon" alt="paper clip" />
    </div>
    <div class="info">
      <p class="title">BTC timestamping whitepaper</p>
      <p class="subtitle">PDF</p>
    </div>
    <p class="size">1.1MB</p>
  </a>
</div>

import DocCardList from '@theme/DocCardList';

<DocCardList />
