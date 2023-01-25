"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=i(n),b=o,p=y["".concat(c,".").concat(b)]||y[b]||d[b]||r;return n?a.createElement(p,u(u({ref:t},s),{},{components:n})):a.createElement(p,u({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,u=new Array(r);u[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<r;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={id:"babylond_query_auth_accounts",sidebar_label:"babylond query auth accounts",hide_table_of_contents:!0},u="babylond query auth accounts",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts",id:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts",title:"babylond query auth accounts",description:"Querying all the accounts authentication modules.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_accounts.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_auth",slug:"/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_accounts.md",tags:[],version:"current",frontMatter:{id:"babylond_query_auth_accounts",sidebar_label:"babylond query auth accounts",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query auth account",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_account"},next:{title:"babylond query auth address by-acc-num",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num"}},c={},i=[{value:"query auth accounts command",id:"query-auth-accounts-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-query-auth-accounts"},"babylond query auth accounts"),(0,o.kt)("p",null,"Querying all the accounts authentication modules."),(0,o.kt)("h2",{id:"query-auth-accounts-command"},"query auth accounts command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond query auth accounts [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in all-accounts to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for accounts\n      --limit uint        pagination limit of all-accounts to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of all-accounts to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of all-accounts to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of all-accounts to query for\n      --reverse           results are sorted in descending order\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--chain-id string     The network chain ID\n--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--trace               print out full stack trace on errors\n')))}d.isMDXComponent=!0}}]);