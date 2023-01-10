"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=o,f=c["".concat(d,".").concat(g)]||c[g]||y[g]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={id:"babylond_query_staking_redelegation-from",sidebar_label:"Babylond_query_staking_redelegation-from",hide_table_of_contents:!0},i="Babylond Query staking redelegation-from",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation-from",id:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation-from",title:"Babylond Query staking redelegation-from",description:"Query all outgoing redelegations from a validator.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation-from.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_staking",slug:"/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation-from",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation-from",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation-from.md",tags:[],version:"current",frontMatter:{id:"babylond_query_staking_redelegation-from",sidebar_label:"Babylond_query_staking_redelegation-from",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_staking_redelegations",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegations"},next:{title:"Babylond_query_staking_unbounding-delegation",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegation"}},d={},s=[{value:"query staking redelegation-from command",id:"query-staking-redelegation-from-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-staking-redelegation-from"},"Babylond Query staking redelegation-from"),(0,o.kt)("p",null,"Query all outgoing redelegations from a validator."),(0,o.kt)("h2",{id:"query-staking-redelegation-from-command"},"query staking redelegation-from command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query staking redelegations-from [validator-addr] [flags]\n")),(0,o.kt)("h3",{id:"example-command"},"Example Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ babylond query staking redelegations-from babylondloper44thgut3ccd8ay0zduzj64hwre2fxs9luytnnm\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in validator redelegations to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for redelegations-from\n      --limit uint        pagination limit of validator redelegations to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of validator redelegations to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of validator redelegations to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of validator redelegations to query for\n      --reverse           results are sorted in descending order\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);