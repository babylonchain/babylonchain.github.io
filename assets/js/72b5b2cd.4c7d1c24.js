"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=m(t),y=o,u=b["".concat(l,".").concat(y)]||b[y]||s[y]||r;return t?a.createElement(u,c(c({ref:n},d),{},{components:t})):a.createElement(u,c({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[b]="string"==typeof e?e:o,c[1]=i;for(var m=2;m<r;m++)c[m]=t[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=t(7462),o=(t(7294),t(3905));const r={id:"Babylond_query_ibc_channel_packet-commitments",sidebar_label:"babylond query ibc channel packet-commitments",hide_table_of_contents:!0},c="babylond query ibc channel packet-commitments",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments",title:"babylond query ibc channel packet-commitments",description:"Query all packet commitments associated with the specified channel.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_channel_packet-commitments",sidebar_label:"babylond query ibc channel packet-commitments",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc channel packet-commitment",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitment"},next:{title:"babylond query ibc channel packet-receipt",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-receipt"}},l={},m=[{value:"query ibc channel packet-commitments command",id:"query-ibc-channel-packet-commitments-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:m};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-ibc-channel-packet-commitments"},"babylond query ibc channel packet-commitments"),(0,o.kt)("p",null,"Query all packet commitments associated with the specified channel."),(0,o.kt)("h2",{id:"query-ibc-channel-packet-commitments-command"},"query ibc channel packet-commitments command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query ibc channel packet-commitments [port-id] [channel-id] [flags]\n")),(0,o.kt)("h3",{id:"example-command"},"Example Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ babylond query ibc channel packet-commitments [port-id] [channel-id]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in packet commitments associated with a channel to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for packet-commitments\n      --limit uint        pagination limit of packet commitments associated with a channel to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of packet commitments associated with a channel to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of packet commitments associated with a channel to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of packet commitments associated with a channel to query for\n      --reverse           results are sorted in descending order\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);