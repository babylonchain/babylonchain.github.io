"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>s});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=d(n),s=a,m=b["".concat(c,".").concat(s)]||b[s]||y[s]||r;return n?o.createElement(m,u(u({ref:t},i),{},{components:n})):o.createElement(m,u({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var d=2;d<r;d++)u[d]=n[d];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={id:"babylond_query_auth_module_account",sidebar_label:"babylond query auth module-account",hide_table_of_contents:!0},u="babylond query auth module-account",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account",id:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account",title:"babylond query auth module-account",description:"Querying an account\u2019s module info by the specified module name.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_account.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_auth",slug:"/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_account.md",tags:[],version:"current",frontMatter:{id:"babylond_query_auth_module_account",sidebar_label:"babylond query auth module-account",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query auth address by-acc-num",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num"},next:{title:"babylond query auth module-accounts",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts"}},c={},d=[{value:"query auth module-account command",id:"query-auth-module-account-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],i={toc:d};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-auth-module-account"},"babylond query auth module-account"),(0,a.kt)("p",null,"Querying an account\u2019s module info by the specified module name."),(0,a.kt)("h2",{id:"query-auth-module-account-command"},"query auth module-account command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query auth module-account [module-name] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for module-account\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);