"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,m=b["".concat(s,".").concat(u)]||b[u]||f[u]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={id:"babylond_testnet",sidebar_label:"babylond testnet",hide_table_of_contents:!0},i="babylond testnet",l={unversionedId:"cli/babylond/babylond_testnet",id:"cli/babylond/babylond_testnet",title:"babylond testnet",description:"Initialize the files for a Babylon testnet.",source:"@site/docs/cli/babylond/Babylond_testnet.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylond_testnet",permalink:"/docs/cli/babylond/babylond_testnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_testnet.md",tags:[],version:"current",frontMatter:{id:"babylond_testnet",sidebar_label:"babylond testnet",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tendermint version",permalink:"/docs/cli/babylond/Babylond_tendermint/babylond_tendermint_version"},next:{title:"babylond tx",permalink:"/docs/cli/babylond/babylond_tx"}},s={},d=[{value:"testnet command",id:"testnet-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:d};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-testnet"},"babylond testnet"),(0,o.kt)("p",null,"Initialize the files for a Babylon testnet."),(0,o.kt)("h2",{id:"testnet-command"},"testnet command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond testnet [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --additional-sender-account       If there should be additional pre funded account per validator\n      --algo string                     Key signing algorithm to generate keys for (default "secp256k1")\n      --btc-base-header string          Hex of the base Bitcoin header. (default "0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a45068653ffff7f2002000000")\n      --btc-base-header-height uint     Height of the base Bitcoin header.\n      --btc-checkpoint-tag string       Tag to use for Bitcoin checkpoints. (default "bbt0")\n      --btc-confirmation-depth uint     Confirmation depth for Bitcoin headers. (default 6)\n      --btc-finalization-timeout uint   Finalization timeout for Bitcoin headers. (default 20)\n      --btc-network string              Bitcoin network to use. Available networks: simnet, testnet, regtest, mainnet (default "simnet")\n      --chain-id string                 genesis file chain-id, if left blank will be randomly created\n      --epoch-interval uint             Number of blocks between epochs. Must be more than 0. (default 400)\n      --genesis-time int                Genesis time (default 1672122091)\n  -h, --help                            help for testnet\n      --keyring-backend string          Select keyring\'s backend (os|file|test) (default "os")\n      --max-active-validators uint32    Maximum number of validators. (default 10)\n      --minimum-gas-prices string       Minimum gas prices to accept for transactions; All fees in a tx must meet this minimum (e.g. 0.001bbn) (default "0.000006ubbn")\n      --node-daemon-home string         Home directory of the node\'s daemon configuration (default "babylond")\n      --node-dir-prefix string          Prefix the directory name for each node with (node results in node0, node1, ...) (default "node")\n  -o, --output-dir string               Directory to store initialization data for the testnet (default "./mytestnet")\n      --starting-ip-address string      Starting IP address (192.168.0.1 results in persistent peers list ID0@192.168.0.1:46656, ID1@192.168.0.2:46656, ...) (default "192.168.0.1")\n      --v int                           Number of validators to initialize the testnet with (default 4)\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);