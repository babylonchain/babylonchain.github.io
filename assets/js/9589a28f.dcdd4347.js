"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},b="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,p=b["".concat(c,".").concat(d)]||b[d]||y[d]||i;return n?o.createElement(p,s(s({ref:t},u),{},{components:n})):o.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[b]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"Babylond_query_ibc_client_consensus-state-heights",sidebar_label:"babylond query ibc client consensus-state-heights",hide_table_of_contents:!0},s="babylond query ibc client consensus-state-heights",a={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights",title:"babylond query ibc client consensus-state-heights",description:"Querying all the consensus state of a client by the specified height.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_client_consensus-state-heights",sidebar_label:"babylond query ibc client consensus-state-heights",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc client consensus-state",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state"},next:{title:"babylond query ibc client consensus-states",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-states"}},c={},l=[{value:"query ibc client consensus-state-heights command",id:"query-ibc-client-consensus-state-heights-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:l};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-ibc-client-consensus-state-heights"},"babylond query ibc client consensus-state-heights"),(0,r.kt)("p",null,"Querying all the consensus state of a client by the specified height."),(0,r.kt)("h2",{id:"query-ibc-client-consensus-state-heights-command"},"query ibc client consensus-state-heights command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query ibc client consensus-state-heights [client-id] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query ibc client consensus-state-heights [client-id]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in consensus state heights to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for consensus-state-heights\n      --limit uint        pagination limit of consensus state heights to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of consensus state heights to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of consensus state heights to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of consensus state heights to query for\n      --reverse           results are sorted in descending order\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);