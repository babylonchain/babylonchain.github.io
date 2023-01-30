"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6689],{3905:(n,e,r)=>{r.d(e,{Zo:()=>y,kt:()=>g});var i=r(67294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function t(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,i,a=function(n,e){if(null==n)return{};var r,i,a={},t=Object.keys(n);for(i=0;i<t.length;i++)r=t[i],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(i=0;i<t.length;i++)r=t[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var l=i.createContext({}),d=function(n){var e=i.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},y=function(n){var e=d(n.components);return i.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(n,e){var r=n.components,a=n.mdxType,t=n.originalType,l=n.parentName,y=s(n,["components","mdxType","originalType","parentName"]),c=d(r),g=a,b=c["".concat(l,".").concat(g)]||c[g]||u[g]||t;return r?i.createElement(b,o(o({ref:e},y),{},{components:r})):i.createElement(b,o({ref:e},y))}));function g(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var t=r.length,o=new Array(t);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var d=2;d<t;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},48222:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=r(87462),a=(r(67294),r(3905));const t={id:"babylond_query_slashing_signing-info",sidebar_label:"babylond query slashing signing-info",hide_table_of_contents:!0},o="babylond query slashing signing-info",s={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-info",id:"cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-info",title:"babylond query slashing signing-info",description:"Querying a validator\u2019s signing information by the specified consensus key.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_slashing/Babylond_query_slashing_signing-info.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_slashing",slug:"/cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-info",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_slashing/Babylond_query_slashing_signing-info.md",tags:[],version:"current",frontMatter:{id:"babylond_query_slashing_signing-info",sidebar_label:"babylond query slashing signing-info",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query slashing params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_params"},next:{title:"babylond query slashing signing-infos",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-infos"}},l={},d=[{value:"query slashing params signing-info command",id:"query-slashing-params-signing-info-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:d};function u(n){let{components:e,...r}=n;return(0,a.kt)("wrapper",(0,i.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-slashing-signing-info"},"babylond query slashing signing-info"),(0,a.kt)("p",null,"Querying a validator\u2019s signing information by the specified consensus key."),(0,a.kt)("h2",{id:"query-slashing-params-signing-info-command"},"query slashing params signing-info command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query slashing signing-info [validator-conspub] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ babylond query slashing signing-info \'{"@type":"/cosmos.crypto.ed25519.PubKey","key":"123iojkhKbN5Lx3fJL689cikXBqe+hcp6Y+x0rIK78jHKL="}\'\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for signing-info\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}u.isMDXComponent=!0}}]);