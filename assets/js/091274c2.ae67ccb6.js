"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7767],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,b=p["".concat(s,".").concat(c)]||p[c]||y[c]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},38256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const o={id:"babylond_query_staking_params",sidebar_label:"babylond query staking params",hide_table_of_contents:!0},i="babylond query staking params",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params",id:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params",title:"babylond query staking params",description:"Querying the current staking parameters information.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_params.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_staking",slug:"/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_params.md",tags:[],version:"current",frontMatter:{id:"babylond_query_staking_params",sidebar_label:"babylond query staking params",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query staking historical-info",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_historical-info"},next:{title:"babylond query staking pool",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool"}},s={},d=[{value:"query staking params command",id:"query-staking-params-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:d};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-staking-params"},"babylond query staking params"),(0,a.kt)("p",null,"Querying the current staking parameters information."),(0,a.kt)("h2",{id:"query-staking-params-command"},"query staking params command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query staking params [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query staking params\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for params\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);