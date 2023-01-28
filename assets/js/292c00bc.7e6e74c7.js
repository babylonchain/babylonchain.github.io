"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1935],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,p=u["".concat(s,".").concat(m)]||u[m]||b[m]||i;return n?a.createElement(p,o(o({ref:e},c),{},{components:n})):a.createElement(p,o({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d[u]="string"==typeof t?t:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9929:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"babylond_tx_distribution_set-withdraw-addr",sidebar_label:"babylond tx distribution set-withdraw-addr",hide_table_of_contents:!0},o="babylond tx distribution set-withdraw-addr",d={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_set-withdraw-addr",id:"cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_set-withdraw-addr",title:"babylond tx distribution set-withdraw-addr",description:"Change the default withdraw address for rewards associated with an address.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_set-withdraw-addr.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_distribution",slug:"/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_set-withdraw-addr",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_set-withdraw-addr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_set-withdraw-addr.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_distribution_set-withdraw-addr",sidebar_label:"babylond tx distribution set-withdraw-addr",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx distribution fund-community-pool",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_fund-community-pool"},next:{title:"babylond tx distribution withdraw-rewards",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-rewards"}},s={},l=[{value:"tx distribution set-withdraw-addr command",id:"tx-distribution-set-withdraw-addr-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-tx-distribution-set-withdraw-addr"},"babylond tx distribution set-withdraw-addr"),(0,r.kt)("p",null,"Change the default withdraw address for rewards associated with an address."),(0,r.kt)("h2",{id:"tx-distribution-set-withdraw-addr-command"},"tx distribution set-withdraw-addr command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond tx distribution set-withdraw-addr [withdraw-addr] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond tx distribution set-withdraw-addr babylond1gghjut3ccd8ay0zduzj64hwre2fxs9ld88ioP5 --yes\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for fund-community-pool\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}u.isMDXComponent=!0}}]);