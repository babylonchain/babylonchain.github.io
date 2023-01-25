"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,b=p["".concat(d,".").concat(c)]||p[c]||y[c]||a;return t?o.createElement(b,l(l({ref:n},u),{},{components:t})):o.createElement(b,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={id:"babylond_query_staking_pool",sidebar_label:"babylond query staking pool",hide_table_of_contents:!0},l="babylond query staking pool",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool",id:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool",title:"babylond query staking pool",description:"Querying the current value stored on the staking pool.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_pool.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_staking",slug:"/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_pool.md",tags:[],version:"current",frontMatter:{id:"babylond_query_staking_pool",sidebar_label:"babylond query staking pool",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query staking params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params"},next:{title:"babylond query staking redelegation",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation"}},d={},s=[{value:"query staking pool command",id:"query-staking-pool-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function y(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-staking-pool"},"babylond query staking pool"),(0,r.kt)("p",null,"Querying the current value stored on the staking pool."),(0,r.kt)("h2",{id:"query-staking-pool-command"},"query staking pool command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query staking pool [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query staking pool\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for pool\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);