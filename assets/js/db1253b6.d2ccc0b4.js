"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,f=u["".concat(d,".").concat(b)]||u[b]||m[b]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={id:"babylond_tendermint_unsafe-reset-all",sidebar_label:"babylond tendermint unsafe-reset-all(unsafe)",hide_table_of_contents:!0},l="babylond tendermint unsafe-reset-all(unsafe)",i={unversionedId:"cli/babylond/Babylond_tendermint/babylond_tendermint_unsafe-reset-all",id:"cli/babylond/Babylond_tendermint/babylond_tendermint_unsafe-reset-all",title:"babylond tendermint unsafe-reset-all(unsafe)",description:"Remove all the data, WAL, and reset the node\u2019s validator to the genesis state.",source:"@site/docs/cli/babylond/Babylond_tendermint/Babylond_tendermint_unsafe-reset-all.md",sourceDirName:"cli/babylond/Babylond_tendermint",slug:"/cli/babylond/Babylond_tendermint/babylond_tendermint_unsafe-reset-all",permalink:"/docs/cli/babylond/Babylond_tendermint/babylond_tendermint_unsafe-reset-all",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tendermint/Babylond_tendermint_unsafe-reset-all.md",tags:[],version:"current",frontMatter:{id:"babylond_tendermint_unsafe-reset-all",sidebar_label:"babylond tendermint unsafe-reset-all(unsafe)",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tendermint show-validator",permalink:"/docs/cli/babylond/Babylond_tendermint/babylond_tendermint_show-validator"},next:{title:"babylond tendermint version",permalink:"/docs/cli/babylond/Babylond_tendermint/babylond_tendermint_version"}},d={},s=[{value:"tendermint unsafe-reset-all(unsafe) command",id:"tendermint-unsafe-reset-allunsafe-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-tendermint-unsafe-reset-allunsafe"},"babylond tendermint unsafe-reset-all(unsafe)"),(0,a.kt)("p",null,"Remove all the data, WAL, and reset the node\u2019s validator to the genesis state."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This command is unsafe, proceed with caution!")),(0,a.kt)("h2",{id:"tendermint-unsafe-reset-allunsafe-command"},"tendermint unsafe-reset-all(unsafe) command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond tendermint unsafe-reset-all [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help             help for unsafe-reset-all\n      --keep-addr-book   keep the address book intact\n")),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}m.isMDXComponent=!0}}]);