"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2063],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},b="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),b=s(t),c=o,p=b["".concat(l,".").concat(c)]||b[c]||y[c]||i;return t?n.createElement(p,a(a({ref:r},u),{},{components:t})):n.createElement(p,a({ref:r},u))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[b]="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6559:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={id:"babylond_query_distribution_rewards",sidebar_label:"babylond query distribution rewards",hide_table_of_contents:!0},a="babylond query distribution rewards",d={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards",id:"cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards",title:"babylond query distribution rewards",description:"Querying all distribution delegator rewards or rewards from a particular validator.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_rewards.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_distribution",slug:"/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/Babylond_query_distribution_rewards.md",tags:[],version:"current",frontMatter:{id:"babylond_query_distribution_rewards",sidebar_label:"babylond query distribution rewards",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query distribution params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_params"},next:{title:"babylond query distribution slashes",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_slashes"}},l={},s=[{value:"query distribution rewards command",id:"query-distribution-rewards-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function b(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-distribution-rewards"},"babylond query distribution rewards"),(0,o.kt)("p",null,"Querying all distribution delegator rewards or rewards from a particular validator."),(0,o.kt)("h2",{id:"query-distribution-rewards-command"},"query distribution rewards command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query distribution rewards [delegator-addr] [validator-addr] [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for rewards\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);