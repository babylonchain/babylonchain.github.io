"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1660],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(t),b=a,p=y["".concat(d,".").concat(b)]||y[b]||c[b]||o;return t?r.createElement(p,l(l({ref:n},u),{},{components:t})):r.createElement(p,l({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"babylond_query_staking_redelegation",sidebar_label:"babylond query staking redelegation",hide_table_of_contents:!0},l="babylond query staking redelegation",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation",id:"cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation",title:"babylond query staking redelegation",description:"Querying a redelegation record based on the delegator, a source, and a destination validator address.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_staking",slug:"/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_staking/Babylond_query_staking_redelegation.md",tags:[],version:"current",frontMatter:{id:"babylond_query_staking_redelegation",sidebar_label:"babylond query staking redelegation",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query staking pool",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool"},next:{title:"babylond query staking redelegations",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegations"}},d={},s=[{value:"query staking redelegation command",id:"query-staking-redelegation-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-staking-redelegation"},"babylond query staking redelegation"),(0,a.kt)("p",null,"Querying a redelegation record based on the delegator, a source, and a destination validator address."),(0,a.kt)("h2",{id:"query-staking-redelegation-command"},"query staking redelegation command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query staking redelegation babylonddevl8ut3ccd8ay0zduzj64hwre2fxs9ld75ru9p axelarvaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm babylonddev1gghjut3ccd8ay0zduzj64hwre2fxs9lfvgtt\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for redelegation\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);