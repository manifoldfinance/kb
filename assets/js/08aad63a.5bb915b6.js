"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[5202],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return y}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=i(o),y=l,m=c["".concat(p,".").concat(y)]||c[y]||u[y]||s;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function y(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=o.length,r=new Array(s);r[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var i=2;i<s;i++)r[i]=o[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9652:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var l=n(o(7294)),s=n(o(9960)),r={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Number"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.values.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement("code",null,e.number)),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("th",{style:r},"Method"),l.default.createElement("td",null,l.default.createElement("code",null,t.name))),l.default.createElement("tr",null,l.default.createElement("th",{style:r},"Request"),l.default.createElement("td",null,l.default.createElement(s.default,{to:t.requestTypeLink},l.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:r},"Response"),l.default.createElement("td",null,l.default.createElement(s.default,{to:t.responseTypeLink},l.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:r},"Description"),l.default.createElement("td",null,t.description))))};var a=function(e){var o=e.methods;return l.default.createElement(l.default.Fragment,null,o.map((function(e,o){return l.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+o})})))};t.ProtoService=function(e){var t=e.service;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(a,{methods:t.methods}))};var p=function(e){var t=e.fields,o=function(e){var t=e.field,o=l.default.createElement("code",null,t.longType);return void 0===t.typeLink?o:l.default.createElement(s.default,{to:t.typeLink},o)};return l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Type"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement(o,{field:e})),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(p,{fields:t.fields}))};t.default=function(e){var o=e.fileDescriptor,n=e.components;return l.default.createElement(l.default.Fragment,null,l.default.createElement(n.h1,null,o.name),l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},o.description),o.messages.map((function(e,o){return l.default.createElement(t.ProtoMessage,{message:e,key:o})})))}},865:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=o(7462),l=o(3366),s=(o(7294),o(3905)),r=o(9652),a=["components"],p={title:"txpool.proto",hide_title:!0},i=void 0,d={unversionedId:"txpool.proto",id:"txpool.proto",title:"txpool.proto",description:"txpool.proto",source:"@site/protodocs/txpool.proto.mdx",sourceDirName:".",slug:"/txpool.proto",permalink:"/protobuf/txpool.proto",draft:!1,tags:[],version:"current",frontMatter:{title:"txpool.proto",hide_title:!0},sidebar:"protodocs",previous:{title:"trace.proto",permalink:"/protobuf/trace.proto"},next:{title:"txpool_control.proto",permalink:"/protobuf/txpool_control.proto"}},u={},c=[{value:"<code>txpool.proto</code>",id:"txpoolproto",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>AddReply</code>",id:"addreply",level:3},{value:"<code>AddRequest</code>",id:"addrequest",level:3},{value:"<code>AllReply</code>",id:"allreply",level:3},{value:"<code>AllReply.Tx</code>",id:"allreplytx",level:3},{value:"<code>AllRequest</code>",id:"allrequest",level:3},{value:"<code>NonceReply</code>",id:"noncereply",level:3},{value:"<code>NonceRequest</code>",id:"noncerequest",level:3},{value:"<code>OnAddReply</code>",id:"onaddreply",level:3},{value:"<code>OnAddRequest</code>",id:"onaddrequest",level:3},{value:"<code>PendingReply</code>",id:"pendingreply",level:3},{value:"<code>PendingReply.Tx</code>",id:"pendingreplytx",level:3},{value:"<code>StatusReply</code>",id:"statusreply",level:3},{value:"<code>StatusRequest</code>",id:"statusrequest",level:3},{value:"<code>TransactionsReply</code>",id:"transactionsreply",level:3},{value:"<code>TransactionsRequest</code>",id:"transactionsrequest",level:3},{value:"<code>TxHashes</code>",id:"txhashes",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>AllReply.TxnType</code>",id:"allreplytxntype",level:3},{value:"<code>ImportResult</code>",id:"importresult",level:3},{value:"Services",id:"services",level:2},{value:"<code>Txpool</code>",id:"txpool",level:3},{value:"<code>Version</code>",id:"version",level:4},{value:"<code>FindUnknown</code>",id:"findunknown",level:4},{value:"<code>Add</code>",id:"add",level:4},{value:"<code>Transactions</code>",id:"transactions",level:4},{value:"<code>All</code>",id:"all",level:4},{value:"<code>Pending</code>",id:"pending",level:4},{value:"<code>OnAdd</code>",id:"onadd",level:4},{value:"<code>Status</code>",id:"status",level:4},{value:"<code>Nonce</code>",id:"nonce",level:4}],y={toc:c};function m(e){var t=e.components,o=(0,l.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"txpoolproto"},(0,s.kt)("inlineCode",{parentName:"h2"},"txpool.proto")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"path")," txpool.proto")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"package")," txpool")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("h3",{id:"addreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"AddReply")),(0,s.kt)(r.ProtoMessage,{key:0,message:{name:"AddReply",longName:"AddReply",fullName:"txpool.AddReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"imported",description:"",label:"repeated",type:"ImportResult",longType:"ImportResult",fullType:"txpool.ImportResult",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/txpool.proto#importresult"},{name:"errors",description:"",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"addrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"AddRequest")),(0,s.kt)(r.ProtoMessage,{key:1,message:{name:"AddRequest",longName:"AddRequest",fullName:"txpool.AddRequest",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"rlpTxs",description:"",label:"repeated",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"allreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"AllReply")),(0,s.kt)(r.ProtoMessage,{key:2,message:{name:"AllReply",longName:"AllReply",fullName:"txpool.AllReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"txs",description:"",label:"repeated",type:"Tx",longType:"AllReply.Tx",fullType:"txpool.AllReply.Tx",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/txpool.proto#allreplytx"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"allreplytx"},(0,s.kt)("inlineCode",{parentName:"h3"},"AllReply.Tx")),(0,s.kt)(r.ProtoMessage,{key:3,message:{name:"Tx",longName:"AllReply.Tx",fullName:"txpool.AllReply.Tx",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"txnType",description:"",label:"",type:"TxnType",longType:"AllReply.TxnType",fullType:"txpool.AllReply.TxnType",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/txpool.proto#allreplytxntype"},{name:"sender",description:"",label:"",type:"H160",longType:"types.H160",fullType:"types.H160",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/types.proto#h160"},{name:"rlpTx",description:"",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"allrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"AllRequest")),(0,s.kt)(r.ProtoMessage,{key:4,message:{name:"AllRequest",longName:"AllRequest",fullName:"txpool.AllRequest",description:"",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"noncereply"},(0,s.kt)("inlineCode",{parentName:"h3"},"NonceReply")),(0,s.kt)(r.ProtoMessage,{key:5,message:{name:"NonceReply",longName:"NonceReply",fullName:"txpool.NonceReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"found",description:"",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"nonce",description:"",label:"",type:"uint64",longType:"uint64",fullType:"uint64",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"noncerequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"NonceRequest")),(0,s.kt)(r.ProtoMessage,{key:6,message:{name:"NonceRequest",longName:"NonceRequest",fullName:"txpool.NonceRequest",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"",label:"",type:"H160",longType:"types.H160",fullType:"types.H160",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/types.proto#h160"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"onaddreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"OnAddReply")),(0,s.kt)(r.ProtoMessage,{key:7,message:{name:"OnAddReply",longName:"OnAddReply",fullName:"txpool.OnAddReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"rplTxs",description:"",label:"repeated",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"onaddrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"OnAddRequest")),(0,s.kt)(r.ProtoMessage,{key:8,message:{name:"OnAddRequest",longName:"OnAddRequest",fullName:"txpool.OnAddRequest",description:"",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"pendingreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"PendingReply")),(0,s.kt)(r.ProtoMessage,{key:9,message:{name:"PendingReply",longName:"PendingReply",fullName:"txpool.PendingReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"txs",description:"",label:"repeated",type:"Tx",longType:"PendingReply.Tx",fullType:"txpool.PendingReply.Tx",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/txpool.proto#pendingreplytx"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"pendingreplytx"},(0,s.kt)("inlineCode",{parentName:"h3"},"PendingReply.Tx")),(0,s.kt)(r.ProtoMessage,{key:10,message:{name:"Tx",longName:"PendingReply.Tx",fullName:"txpool.PendingReply.Tx",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"sender",description:"",label:"",type:"H160",longType:"types.H160",fullType:"types.H160",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/types.proto#h160"},{name:"rlpTx",description:"",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"isLocal",description:"",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"statusreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"StatusReply")),(0,s.kt)(r.ProtoMessage,{key:11,message:{name:"StatusReply",longName:"StatusReply",fullName:"txpool.StatusReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"pendingCount",description:"",label:"",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"queuedCount",description:"",label:"",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"baseFeeCount",description:"",label:"",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"statusrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"StatusRequest")),(0,s.kt)(r.ProtoMessage,{key:12,message:{name:"StatusRequest",longName:"StatusRequest",fullName:"txpool.StatusRequest",description:"",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"transactionsreply"},(0,s.kt)("inlineCode",{parentName:"h3"},"TransactionsReply")),(0,s.kt)(r.ProtoMessage,{key:13,message:{name:"TransactionsReply",longName:"TransactionsReply",fullName:"txpool.TransactionsReply",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"rlpTxs",description:"",label:"repeated",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"transactionsrequest"},(0,s.kt)("inlineCode",{parentName:"h3"},"TransactionsRequest")),(0,s.kt)(r.ProtoMessage,{key:14,message:{name:"TransactionsRequest",longName:"TransactionsRequest",fullName:"txpool.TransactionsRequest",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"hashes",description:"",label:"repeated",type:"H256",longType:"types.H256",fullType:"types.H256",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/types.proto#h256"}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"txhashes"},(0,s.kt)("inlineCode",{parentName:"h3"},"TxHashes")),(0,s.kt)(r.ProtoMessage,{key:15,message:{name:"TxHashes",longName:"TxHashes",fullName:"txpool.TxHashes",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"hashes",description:"",label:"repeated",type:"H256",longType:"types.H256",fullType:"types.H256",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protobuf/types.proto#h256"}]},mdxType:"ProtoMessage"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"enums"},"Enums"),(0,s.kt)("h3",{id:"allreplytxntype"},(0,s.kt)("inlineCode",{parentName:"h3"},"AllReply.TxnType")),(0,s.kt)(r.ProtoEnum,{key:0,enumb:{name:"TxnType",longName:"AllReply.TxnType",fullName:"txpool.AllReply.TxnType",description:"",values:[{name:"PENDING",number:"0",description:"All currently processable transactions"},{name:"QUEUED",number:"1",description:"Queued but non-processable transactions"},{name:"BASE_FEE",number:"2",description:"BaseFee not enough baseFee non-processable transactions"}]},mdxType:"ProtoEnum"}),(0,s.kt)("h3",{id:"importresult"},(0,s.kt)("inlineCode",{parentName:"h3"},"ImportResult")),(0,s.kt)(r.ProtoEnum,{key:1,enumb:{name:"ImportResult",longName:"ImportResult",fullName:"txpool.ImportResult",description:"",values:[{name:"SUCCESS",number:"0",description:""},{name:"ALREADY_EXISTS",number:"1",description:""},{name:"FEE_TOO_LOW",number:"2",description:""},{name:"STALE",number:"3",description:""},{name:"INVALID",number:"4",description:""},{name:"INTERNAL_ERROR",number:"5",description:""}]},mdxType:"ProtoEnum"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"services"},"Services"),(0,s.kt)("h3",{id:"txpool"},(0,s.kt)("inlineCode",{parentName:"h3"},"Txpool")),(0,s.kt)("h4",{id:"version"},(0,s.kt)("inlineCode",{parentName:"h4"},"Version")),(0,s.kt)(r.ProtoServiceMethod,{key:"Version-0",method:{name:"Version",description:"Version returns the service version number",requestType:"Empty",requestLongType:".google.protobuf.Empty",requestFullType:"google.protobuf.Empty",requestStreaming:!1,responseType:"VersionReply",responseLongType:".types.VersionReply",responseFullType:"types.VersionReply",responseStreaming:!1,requestTypeLink:"/protobuf/empty.proto#empty",responseTypeLink:"/protobuf/types.proto#versionreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"findunknown"},(0,s.kt)("inlineCode",{parentName:"h4"},"FindUnknown")),(0,s.kt)(r.ProtoServiceMethod,{key:"FindUnknown-1",method:{name:"FindUnknown",description:"preserves incoming order, changes amount, unknown hashes will be omitted",requestType:"TxHashes",requestLongType:"TxHashes",requestFullType:"txpool.TxHashes",requestStreaming:!1,responseType:"TxHashes",responseLongType:"TxHashes",responseFullType:"txpool.TxHashes",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#txhashes",responseTypeLink:"/protobuf/txpool.proto#txhashes"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"add"},(0,s.kt)("inlineCode",{parentName:"h4"},"Add")),(0,s.kt)(r.ProtoServiceMethod,{key:"Add-2",method:{name:"Add",description:"Expecting signed transactions. Preserves incoming order and amount\nAdding txs as local (use P2P to add remote txs)",requestType:"AddRequest",requestLongType:"AddRequest",requestFullType:"txpool.AddRequest",requestStreaming:!1,responseType:"AddReply",responseLongType:"AddReply",responseFullType:"txpool.AddReply",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#addrequest",responseTypeLink:"/protobuf/txpool.proto#addreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"transactions"},(0,s.kt)("inlineCode",{parentName:"h4"},"Transactions")),(0,s.kt)(r.ProtoServiceMethod,{key:"Transactions-3",method:{name:"Transactions",description:"preserves incoming order and amount, if some transaction doesn't exists in pool - returns nil in this slot",requestType:"TransactionsRequest",requestLongType:"TransactionsRequest",requestFullType:"txpool.TransactionsRequest",requestStreaming:!1,responseType:"TransactionsReply",responseLongType:"TransactionsReply",responseFullType:"txpool.TransactionsReply",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#transactionsrequest",responseTypeLink:"/protobuf/txpool.proto#transactionsreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"all"},(0,s.kt)("inlineCode",{parentName:"h4"},"All")),(0,s.kt)(r.ProtoServiceMethod,{key:"All-4",method:{name:"All",description:"returns all transactions from tx pool",requestType:"AllRequest",requestLongType:"AllRequest",requestFullType:"txpool.AllRequest",requestStreaming:!1,responseType:"AllReply",responseLongType:"AllReply",responseFullType:"txpool.AllReply",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#allrequest",responseTypeLink:"/protobuf/txpool.proto#allreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"pending"},(0,s.kt)("inlineCode",{parentName:"h4"},"Pending")),(0,s.kt)(r.ProtoServiceMethod,{key:"Pending-5",method:{name:"Pending",description:"Returns all pending (processable) transactions, in ready-for-mining order",requestType:"Empty",requestLongType:".google.protobuf.Empty",requestFullType:"google.protobuf.Empty",requestStreaming:!1,responseType:"PendingReply",responseLongType:"PendingReply",responseFullType:"txpool.PendingReply",responseStreaming:!1,requestTypeLink:"/protobuf/empty.proto#empty",responseTypeLink:"/protobuf/txpool.proto#pendingreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"onadd"},(0,s.kt)("inlineCode",{parentName:"h4"},"OnAdd")),(0,s.kt)(r.ProtoServiceMethod,{key:"OnAdd-6",method:{name:"OnAdd",description:"subscribe to new transactions add event",requestType:"OnAddRequest",requestLongType:"OnAddRequest",requestFullType:"txpool.OnAddRequest",requestStreaming:!1,responseType:"OnAddReply",responseLongType:"OnAddReply",responseFullType:"txpool.OnAddReply",responseStreaming:!0,requestTypeLink:"/protobuf/txpool.proto#onaddrequest",responseTypeLink:"/protobuf/txpool.proto#onaddreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"status"},(0,s.kt)("inlineCode",{parentName:"h4"},"Status")),(0,s.kt)(r.ProtoServiceMethod,{key:"Status-7",method:{name:"Status",description:"returns high level status",requestType:"StatusRequest",requestLongType:"StatusRequest",requestFullType:"txpool.StatusRequest",requestStreaming:!1,responseType:"StatusReply",responseLongType:"StatusReply",responseFullType:"txpool.StatusReply",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#statusrequest",responseTypeLink:"/protobuf/txpool.proto#statusreply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("h4",{id:"nonce"},(0,s.kt)("inlineCode",{parentName:"h4"},"Nonce")),(0,s.kt)(r.ProtoServiceMethod,{key:"Nonce-8",method:{name:"Nonce",description:"returns nonce for given account",requestType:"NonceRequest",requestLongType:"NonceRequest",requestFullType:"txpool.NonceRequest",requestStreaming:!1,responseType:"NonceReply",responseLongType:"NonceReply",responseFullType:"txpool.NonceReply",responseStreaming:!1,requestTypeLink:"/protobuf/txpool.proto#noncerequest",responseTypeLink:"/protobuf/txpool.proto#noncereply"},mdxType:"ProtoServiceMethod"}),(0,s.kt)("hr",null))}m.isMDXComponent=!0}}]);