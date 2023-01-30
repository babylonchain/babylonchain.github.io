"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5634],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>b});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=c(n),b=i,g=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return n?a.createElement(g,r(r({ref:e},d),{},{components:n})):a.createElement(g,r({ref:e},d))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67798:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"babylond_tx_multi-sign-batch",sidebar_label:"babylond tx multi-sign batch",hide_table_of_contents:!0},r="babylond tx multi-sign batch",s={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_multi-sign/babylond_tx_multi-sign-batch",id:"cli/babylond/Babylond_tx/Babylond_tx_multi-sign/babylond_tx_multi-sign-batch",title:"babylond tx multi-sign batch",description:"Assemble mutisig signatures in batch from batch signatures.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_multi-sign/Babylond_tx_multi-sign-batch.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_multi-sign",slug:"/cli/babylond/Babylond_tx/Babylond_tx_multi-sign/babylond_tx_multi-sign-batch",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_multi-sign/babylond_tx_multi-sign-batch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_multi-sign/Babylond_tx_multi-sign-batch.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_multi-sign-batch",sidebar_label:"babylond tx multi-sign batch",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx multi-sign",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_multi-sign"},next:{title:"babylond tx sign",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_sign"}},l={},c=[{value:"tx multi-sign command batch",id:"tx-multi-sign-command-batch",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"babylond-tx-multi-sign-batch"},"babylond tx multi-sign batch"),(0,i.kt)("p",null,"Assemble mutisig signatures in batch from batch signatures."),(0,i.kt)("h2",{id:"tx-multi-sign-command-batch"},"tx multi-sign command batch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"babylond tx multi-sign [file] [name] [[signature]...] [flags]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --amino                    Generate Amino-encoded JSON suitable for submitting to the txs REST endpoint\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --chain-id string          network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for multi-sign\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --output-document string   The document is written to the given file instead of STDOUT\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --signature-only           Print only the generated signature, then exit\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}u.isMDXComponent=!0}}]);