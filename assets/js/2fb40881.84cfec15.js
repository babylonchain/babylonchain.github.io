"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),b=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=b(n),h=i,s=y["".concat(c,".").concat(h)]||y[h]||u[h]||a;return n?r.createElement(s,l(l({ref:t},d),{},{components:n})):r.createElement(s,l({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[y]="string"==typeof e?e:i,l[1]=o;for(var b=2;b<a;b++)l[b]=n[b];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>b});var r=n(7462),i=(n(7294),n(3905));const a={id:"babylond_query_btclightclient_main-chain",sidebar_label:"babylond query btclightclient main-chain",hide_table_of_contents:!0},l="babylond query btclightclient main-chain",o={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain",id:"cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain",title:"babylond query btclightclient main-chain",description:"Retrieve the canonical chain.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_btclightclient",slug:"/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain.md",tags:[],version:"current",frontMatter:{id:"babylond_query_btclightclient_main-chain",sidebar_label:"babylond query btclightclient main-chain",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query btclightclient hashes",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_hashes"},next:{title:"babylond query btclightclient params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_params"}},c={},b=[{value:"query btclightclient main-chain command",id:"query-btclightclient-main-chain-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:b};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"babylond-query-btclightclient-main-chain"},"babylond query btclightclient main-chain"),(0,i.kt)("p",null,"Retrieve the canonical chain."),(0,i.kt)("h2",{id:"query-btclightclient-main-chain-command"},"query btclightclient main-chain command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"babylond query btclightclient main-chain [flags]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for main-chain\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);