"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),b=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||h[d]||c;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var b=2;b<c;b++)i[b]=n[b];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>b});var r=n(7462),o=(n(7294),n(3905));const c={id:"babylond_query_btccheckpoint_btc-height",sidebar_label:"Babylond_query_btccheckpoint_btc-height",hide_table_of_contents:!0},i="Babylond Query btccheckpoint btc-height",a={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height",id:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height",title:"Babylond Query btccheckpoint btc-height",description:"Retrieve the earliest btc height for the given epoch.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_btc-height.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_btccheckpoint",slug:"/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/Babylond_query_btccheckpoint_btc-height.md",tags:[],version:"current",frontMatter:{id:"babylond_query_btccheckpoint_btc-height",sidebar_label:"Babylond_query_btccheckpoint_btc-height",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_btccheckpoint",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_btccheckpoint"},next:{title:"Babylond_query_btccheckpoint_epoch-submissions",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions"}},l={},b=[{value:"query btccheckpoint btc-height command",id:"query-btccheckpoint-btc-height-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],p={toc:b};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-btccheckpoint-btc-height"},"Babylond Query btccheckpoint btc-height"),(0,o.kt)("p",null,"Retrieve the earliest btc height for the given epoch."),(0,o.kt)("h2",{id:"query-btccheckpoint-btc-height-command"},"query btccheckpoint btc-height command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query btccheckpoint btc-height <epoch_number> [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for btc-height\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}h.isMDXComponent=!0}}]);