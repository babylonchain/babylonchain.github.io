"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"babylond_start",sidebar_label:"babylond start",hide_table_of_contents:!0},i="babylond start",s={unversionedId:"cli/babylond/babylond_start",id:"cli/babylond/babylond_start",title:"babylond start",description:"Tendermint can be run in the foreground or behind the scenes with the full-node application. By default, the application will run with Tendermint in process.",source:"@site/docs/cli/babylond/Babylond_start.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylond_start",permalink:"/docs/cli/babylond/babylond_start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_start.md",tags:[],version:"current",frontMatter:{id:"babylond_start",sidebar_label:"babylond start",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond rosetta",permalink:"/docs/cli/babylond/babylond_rosetta"},next:{title:"babylond status",permalink:"/docs/cli/babylond/babylond_status"}},l={},d=[{value:"start command",id:"start-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-start"},"babylond start"),(0,a.kt)("p",null,"Tendermint can be run in the foreground or behind the scenes with the full-node application. By default, the application will run with Tendermint in process."),(0,a.kt)("h2",{id:"start-command"},"start command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond start [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --abci string                                     specify abci transport (socket | grpc) (default "socket")\n      --address string                                  Listen address (default "tcp://0.0.0.0:26658")\n      --api.address string                              the API server address to listen on (default "tcp://0.0.0.0:1317")\n      --api.enable                                      Define if the API server should be enabled\n      --api.enabled-unsafe-cors                         Define if CORS should be enabled (unsafe - use it at your own risk)\n      --api.max-open-connections uint                   Define the number of maximum open connections (default 1000)\n      --api.rpc-max-body-bytes uint                     Define the Tendermint maximum response body (in bytes) (default 1000000)\n      --api.rpc-read-timeout uint                       Define the Tendermint RPC read timeout (in seconds) (default 10)\n      --api.rpc-write-timeout uint                      Define the Tendermint RPC write timeout (in seconds)\n      --api.swagger                                     Define if swagger documentation should automatically be registered (Note: the API must also be enabled)\n      --chain-id string                                 genesis file chain-id, if left blank will be randomly created\n      --consensus.create_empty_blocks                   set this to false to only produce blocks when there are txs or when the AppHash changes (default true)\n      --consensus.create_empty_blocks_interval string   the possible interval between empty blocks (default "0s")\n      --consensus.double_sign_check_height int          how many blocks to look back to check existence of the node\'s consensus votes before joining consensus\n      --cpu-profile string                              Enable CPU profiling and write to the provided file\n      --db_backend string                               database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb (default "goleveldb")\n      --db_dir string                                   database directory (default "data")\n      --fast_sync                                       fast blockchain syncing (default true)\n      --genesis_hash bytesHex                           optional SHA-256 hash of the genesis file\n      --grpc-only                                       Start the node in gRPC query only mode (no Tendermint process is started)\n      --grpc-web.address string                         The gRPC-Web server address to listen on (default "0.0.0.0:9091")\n      --grpc-web.enable                                 Define if the gRPC-Web server should be enabled. (Note: gRPC must also be enabled) (default true)\n      --grpc.address string                             the gRPC server address to listen on (default "0.0.0.0:9090")\n      --grpc.enable                                     Define if the gRPC server should be enabled (default true)\n      --halt-height uint                                Block height at which to gracefully halt the chain and shutdown the node\n      --halt-time uint                                  Minimum block time (in Unix seconds) at which to gracefully halt the chain and shutdown the node\n  -h, --help                                            help for start\n      --home string                                     The application home directory (default "/home/<yourSystemUsername>/.babylond")\n      --iavl-disable-fastnode                           Disable fast node for IAVL tree\n      --inter-block-cache                               Enable inter-block caching (default true)\n      --inv-check-period uint                           Assert registered invariants every N blocks\n      --keyring-backend string                          Select keyring\'s backend (os|file|kwallet|pass|test) (default "os")\n      --min-retain-blocks uint                          Minimum block height offset during ABCI commit to prune Tendermint blocks\n      --minimum-gas-prices string                       Minimum gas prices to accept for transactions; Any fee in a tx must meet this minimum (e.g. 0.01photino;0.0001stake)\n      --moniker string                                  node name (default <yourDesktopName>)\n      --p2p.external-address string                     ip:port address to advertise to peers for them to dial\n      --p2p.laddr string                                node listen address. (0.0.0.0:0 means any interface, any port) (default "tcp://0.0.0.0:26656")\n      --p2p.persistent_peers string                     comma-delimited ID@host:port persistent peers\n      --p2p.pex                                         enable/disable Peer-Exchange (default true)\n      --p2p.private_peer_ids string                     comma-delimited private peer IDs\n      --p2p.seed_mode                                   enable/disable seed mode\n      --p2p.seeds string                                comma-delimited ID@host:port seed nodes\n      --p2p.unconditional_peer_ids string               comma-delimited IDs of unconditional peers\n      --p2p.upnp                                        enable/disable UPNP port forwarding\n      --priv_validator_laddr string                     socket address to listen on for connections from external priv_validator process\n      --proxy_app string                                proxy app address, or one of: \'kvstore\', \'persistent_kvstore\', \'counter\', \'e2e\' or \'noop\' for local testing. (default "tcp://127.0.0.1:26658")\n      --pruning string                                  Pruning strategy (default|nothing|everything|custom) (default "default")\n      --pruning-interval uint                           Height interval at which pruned heights are removed from disk (ignored if pruning is not \'custom\')\n      --pruning-keep-recent uint                        Number of recent heights to keep on disk (ignored if pruning is not \'custom\')\n      --rpc.grpc_laddr string                           GRPC listen address (BroadcastTx only). Port required\n      --rpc.laddr string                                RPC listen address. Port required (default "tcp://127.0.0.1:26657")\n      --rpc.pprof_laddr string                          pprof listen address (https://golang.org/pkg/net/http/pprof)\n      --rpc.unsafe                                      enabled unsafe rpc methods\n      --state-sync.snapshot-interval uint               State sync snapshot interval\n      --state-sync.snapshot-keep-recent uint32          State sync snapshot to keep (default 2)\n      --trace                                           Provide full stack traces for errors in ABCI Log\n      --trace-store string                              Enable KVStore tracing to an output file\n      --transport string                                Transport protocol: socket, grpc (default "socket")\n      --unsafe-skip-upgrades ints                       Skip a set of upgrade heights to continue the old binary\n      --with-tendermint                                 Run abci app embedded in-process with tendermint (default true)\n      --x-crisis-skip-assert-invariants                 Skip x/crisis invariants check on startup\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n')))}p.isMDXComponent=!0}}]);