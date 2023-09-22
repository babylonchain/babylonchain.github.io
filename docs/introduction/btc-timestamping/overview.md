---
id: overview
sidebar_label: Bitcoin Timestamping
hide_table_of_contents: true
---

# Bitcoin Timestamping

Babylon's Bitcoin timestamping Protocol introduces an innovative approach to timestamping PoS blockchains on Bitcoin, enhancing their integrity and security.
With Bitcoin's unparalleled security, these timestamps on Bitcoin can be used to resolve various security issues with the PoS blockchain, such as the long range attacks.
The protocol includes Bitcoin as the timestamping service, the babylon blockchain as the checkpoint aggregation and data availability service, and other PoS blockchains as the consumers of security.

Bitcoin timestamping services as a key building block for the [Bitcoin staking](/docs/introduction/btc-staking/overview.md) protocol, and provides various use cases, including:

- **Fast Unbonding:** PoS blockchains require social consensus to circumvent long range attacks and this leads to long unbonding periods. Bitcoin security replaces social consensus and reduces unbonding periods to 5 hours.
- **Bootstrapping new zones:** Bitcoin security can be used to bootstrap new zones which have low token valuation.
- **Protecting important transactions:** Bitcoin security can be used to protect important transactions while normal transactions get fast finality.
- **Censorship resistance:** Transactions that are censored can use Babylon as a backup to enter the ledger.

<div class="pdf-banner">
  <a class="pdf-link" target="\_blank" href="https://arxiv.org/pdf/2207.08392.pdf">
    <span class="pdf-text">BTC timestamping whitepaper</span>
    <span class="pdf-icon">PDF</span>
  </a>
</div>

import DocCardList from '@theme/DocCardList';

<DocCardList />