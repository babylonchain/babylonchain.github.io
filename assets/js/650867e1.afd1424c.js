"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},y=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),s=l(n),b=a,_=s["".concat(d,".").concat(b)]||s[b]||i[b]||o;return n?r.createElement(_,u(u({ref:t},y),{},{components:n})):r.createElement(_,u({ref:t},y))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>i,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"babylond_query_auth_address_by_acc_num",sidebar_label:"Babylond_query_auth_address_by_acc_num",hide_table_of_contents:!0},u="Babylond Query Auth address by-acc-num",c={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num",id:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num",title:"Babylond Query Auth address by-acc-num",description:"Querying for an address by the specified account number.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_address_by_acc_num.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_auth",slug:"/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_address_by_acc_num.md",tags:[],version:"current",frontMatter:{id:"babylond_query_auth_address_by_acc_num",sidebar_label:"Babylond_query_auth_address_by_acc_num",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_auth_accounts",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts"},next:{title:"Babylond_query_auth_module_account",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account"}},d={},l=[{value:"query auth accounts command",id:"query-auth-accounts-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:l};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-auth-address-by-acc-num"},"Babylond Query Auth address by-acc-num"),(0,a.kt)("p",null,"Querying for an address by the specified account number."),(0,a.kt)("h2",{id:"query-auth-accounts-command"},"query auth accounts command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," babylond query auth address-by-acc-num [acc-num] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for address-by-acc-num\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}i.isMDXComponent=!0}}]);