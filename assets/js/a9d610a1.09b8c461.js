"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1820],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),y=u(r),c=a,p=y["".concat(l,".").concat(c)]||y[c]||b[c]||o;return r?n.createElement(p,i(i({ref:e},s),{},{components:r})):n.createElement(p,i({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=y;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:a,i[1]=d;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7644:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"babylond_query_distribution_validator-outstanding-rewards",sidebar_label:"Babylond_query_distribution_validator-outstanding-rewards",hide_table_of_contents:!0},i="Babylond Query distribution validator-outstanding-rewards",d={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards",id:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards",title:"Babylond Query distribution validator-outstanding-rewards",description:"Querying distribution of outstanding (un-withdrawn) rewards for validator and all their delegations.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_validator_outstanding_rewards.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_distribution",slug:"/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_validator_outstanding_rewards.md",tags:[],version:"current",frontMatter:{id:"babylond_query_distribution_validator-outstanding-rewards",sidebar_label:"Babylond_query_distribution_validator-outstanding-rewards",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_distribution_slashes",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_slashes"},next:{title:"Babylond_query_epoching",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_epoching"}},l={},u=[{value:"query distribution validator-outstanding-rewards command",id:"query-distribution-validator-outstanding-rewards-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:u};function b(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-distribution-validator-outstanding-rewards"},"Babylond Query distribution validator-outstanding-rewards"),(0,a.kt)("p",null,"Querying distribution of outstanding (un-withdrawn) rewards for validator and all their delegations."),(0,a.kt)("h2",{id:"query-distribution-validator-outstanding-rewards-command"},"query distribution validator-outstanding-rewards command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query distribution validator-outstanding-rewards [validator] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query distribution validator-outstanding-rewards babylondloper12345xwnmfayc64ycprww49n33mtm92ne\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for validator-outstanding-rewards\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);