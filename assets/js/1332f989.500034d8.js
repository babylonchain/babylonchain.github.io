"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),b=a,p=c["".concat(d,".").concat(b)]||c[b]||y[b]||o;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"babylond_query_tendermint-validator-set",sidebar_label:"babylond query tendermint-validator-set",hide_table_of_contents:!0},i="babylond query tendermint-validator-set",l={unversionedId:"cli/babylond/BabylondQuery/babylond_query_tendermint-validator-set",id:"cli/babylond/BabylondQuery/babylond_query_tendermint-validator-set",title:"babylond query tendermint-validator-set",description:"Get the full tendermint validator set by the specified height.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_tendermint-validator-set.md",sourceDirName:"cli/babylond/BabylondQuery",slug:"/cli/babylond/BabylondQuery/babylond_query_tendermint-validator-set",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_tendermint-validator-set",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_tendermint-validator-set.md",tags:[],version:"current",frontMatter:{id:"babylond_query_tendermint-validator-set",sidebar_label:"babylond query tendermint-validator-set",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query staking validators",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_validators"},next:{title:"babylond query tx",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_tx"}},d={},s=[{value:"query tendermint-validator-set command",id:"query-tendermint-validator-set-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-tendermint-validator-set"},"babylond query tendermint-validator-set"),(0,a.kt)("p",null,"Get the full tendermint validator set by the specified height."),(0,a.kt)("h2",{id:"query-tendermint-validator-set-command"},"query tendermint-validator-set command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query tendermint-validator-set [height] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -h, --help            help for tendermint-validator-set\n      --limit int       Query number of results returned per page (default 100)\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n      --page int        Query a specific page of paginated results (default 1)\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}c.isMDXComponent=!0}}]);