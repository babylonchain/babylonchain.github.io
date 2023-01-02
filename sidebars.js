/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro', 
    'installation', 
    'setnode', 
    {
      type: 'category',
      label: 'Modules',
      link: {
        type: 'doc',
        id: 'modules',
      },
      items: [
        {
          type: 'category',
          label: 'Epoching Module',
          link: {
            type: 'doc',
            id: 'module/epoch/epochingmod',
          },
          items: [
            'module/epoch/paramsmod',
            'module/epoch/epochinfomod',
            'module/epoch/currentepoch',
            'module/epoch/epochmsgs',
            'module/epoch/latepochmsgs',
            'module/epoch/validatorlifecycle',
            'module/epoch/delegationlifecycle',
          ],
        },
        {
          type: 'category',
          label: 'Checkpointing Module',
          link: {
            type: 'doc',
            id: 'module/checkpointing/checkpointingmod',
          },
          items: [
            'module/checkpointing/rawcheckpointinglist',
            'module/checkpointing/recentrawcheckpointinglist',
            'module/checkpointing/rawcheckpoint',
            'module/checkpointing/latestcheckpoint',
            'module/checkpointing/blspublickey',
            'module/checkpointing/epochstatus',
            'module/checkpointing/recentepochcount',
            'module/checkpointing/checkpointparams',
          ],
        },
        {
          type: 'category',
          label: 'BTC Light Client',
          link: {
            type: 'doc',
            id: 'module/btclightclient/lightclient',
          },
          items: [
            'module/btclightclient/lightparams',
            'module/btclightclient/lighthashes',
            'module/btclightclient/lightcontains',
            'module/btclightclient/lightcontainsbytes',
            'module/btclightclient/lightmainchain',
            'module/btclightclient/lighttip',
            'module/btclightclient/lightbaseheader',
          ],
        },
        {
          type: 'category',
          label: 'BTC Checkpoint',
          link: {
            type: 'doc',
            id: 'module/btccheckpoint/btccheckpoint',
          },
          items: [
            'module/btccheckpoint/checkpointparams',
            'module/btccheckpoint/checkpointheight',
            'module/btccheckpoint/epochsubmissions',
          ],
        },
        {
          type: 'category',
          label: 'CZ Concierge',
          link: {
            type: 'doc',
            id: 'module/czconcierge/czconcierge',
          },
          items: [
            'module/czconcierge/conciergeparams',
            'module/czconcierge/chainlist',
            'module/czconcierge/chaininfo',
            'module/czconcierge/finalizedchaininfo',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      link: {
        type: 'doc',
        id: 'node/nodeoperator',
      },
      items: [
        'node/nodeconfig',
        'node/nodemanage',
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'doc',
        id: 'resources/resources',
      },
      items: [
        'resources/mainnet',
        'resources/testnet',
      ]
    },
    'videoguides',
    'error'
  ],
};

module.exports = sidebars;
