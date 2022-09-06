"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[6728],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),m=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),k=m(r),s=a,N=k["".concat(d,".").concat(s)]||k[s]||c[s]||o;return r?n.createElement(N,i(i({ref:e},p),{},{components:r})):n.createElement(N,i({ref:e},p))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3215:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3,id:"blockconstruction-policies",title:"Network Filtering and Policies",description:"Network Filtering and Policies Agreement"},d="Network Filtering and Policies",m={unversionedId:"Block-Construction/blockconstruction-policies",id:"Block-Construction/blockconstruction-policies",title:"Network Filtering and Policies",description:"Network Filtering and Policies Agreement",source:"@site/docs/Block-Construction/networking-agreement.md",sourceDirName:"Block-Construction",slug:"/Block-Construction/blockconstruction-policies",permalink:"/docs/Block-Construction/blockconstruction-policies",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/Block-Construction/networking-agreement.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"blockconstruction-policies",title:"Network Filtering and Policies",description:"Network Filtering and Policies Agreement"},sidebar:"docsSidebar",previous:{title:"Rewards and Fee Recipient",permalink:"/docs/Block-Construction/block-rewards"},next:{title:"Block Construction",permalink:"/docs/Block-Construction/blockconstruction-message-ordering"}},p={},c=[{value:"Policy on Content Blocking",id:"policy-on-content-blocking",level:2},{value:"How does Manifold/CommodityStream handle requests for content blocking?",id:"how-does-manifoldcommoditystream-handle-requests-for-content-blocking",level:2},{value:"Does CommodityStream utilize any sort of &#39;blacklist&#39;/&#39;denylist&#39;?",id:"does-commoditystream-utilize-any-sort-of-blacklistdenylist",level:2},{value:"Warrant Canary",id:"warrant-canary",level:2},{value:"Networking and Peering Requirements",id:"networking-and-peering-requirements",level:2},{value:"Peering",id:"peering",level:2},{value:"Latency Benchmarking",id:"latency-benchmarking",level:4},{value:"What is the content delivery path that CommodityStream optimizes?",id:"what-is-the-content-delivery-path-that-commoditystream-optimizes",level:4},{value:"Will CommodityStream offer validator nodes in all countries and regions?",id:"will-commoditystream-offer-validator-nodes-in-all-countries-and-regions",level:4},{value:"Does CommodityStream operate network services within the United States of America?",id:"does-commoditystream-operate-network-services-within-the-united-states-of-america",level:4},{value:"References",id:"references",level:2},{value:"Appendix A: IP Denylist Example",id:"appendix-a-ip-denylist-example",level:2},{value:"Appendix B: CIDR Denylist",id:"appendix-b-cidr-denylist",level:2}],k={toc:c};function s(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-filtering-and-policies"},"Network Filtering and Policies"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Networking and Peering program and policies")),(0,o.kt)("h2",{id:"policy-on-content-blocking"},"Policy on Content Blocking"),(0,o.kt)("p",null,"Last updated: 2022.08.13"),(0,o.kt)("h2",{id:"how-does-manifoldcommoditystream-handle-requests-for-content-blocking"},"How does Manifold/CommodityStream handle requests for content blocking?"),(0,o.kt)("p",null,"CommodityStream, Inc does not block or filter any content through the ",(0,o.kt)("em",{parentName:"p"},"SecureRpc Resolver"),", which is designed for gRPC/RPC connectivity, bidirectional streaming methods for forward and reverse tunneling, direct propagation of potential state changes, custom bidirectional streaming which can be used to send messages back and forth, where the messages each act as RPC requests and responses, but on a single stream (for pinning/affinity, for example), and direct resolution for ENS and ENS like DNS Services, not for blocking or filtering content. CommodityStream does not block and filter transactions, malware and adult content."),(0,o.kt)("p",null,"In general, CommodityStream views government or civil requests to block content at the RPC level as ineffective, inefficient, and overboard. Since such a block would apply globally to all users of the resolver, regardless of where they are located, it would affect end users outside of the blocking government\u2019s jurisdiction. A government request to block content through a globally available public recursive resolver like the ",(0,o.kt)("em",{parentName:"p"},"SecureRpc Gateway ")," should therefore be evaluated as a request to block content globally."),(0,o.kt)("p",null,"Given the broad extraterritorial effect, if CommodityStream were to receive written requests from law enforcement and government agencies to block access to network nodes, RPC gateways, or content through the ",(0,o.kt)("em",{parentName:"p"},"SecureRpc Gateway")," or to block access to network nodes, domains or content, CommodityStream would pursue its legal remedies before complying with such a request. We also commit to documenting any government request to block access in our semi-annual transparency report, unless legally prohibited from doing so."),(0,o.kt)("h2",{id:"does-commoditystream-utilize-any-sort-of-blacklistdenylist"},"Does CommodityStream utilize any sort of 'blacklist'/'denylist'?"),(0,o.kt)("p",null,"We utilize an AS/IP address denylist, which you can see in the ",(0,o.kt)("a",{parentName:"p",href:"#Appendix"},"Appendix")),(0,o.kt)("h2",{id:"warrant-canary"},"Warrant Canary"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://securerpc.com/.well-known/canary.json"},"https://securerpc.com/.well-known/canary.json")),(0,o.kt)("h2",{id:"networking-and-peering-requirements"},"Networking and Peering Requirements"),(0,o.kt)("p",null,"CommodityStream optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user."),(0,o.kt)("p",null,"Our Backbone Interconnect service provides additional connection options for Validator Pools using Backbone Platform by utilizing CommodityStream's validator infrastructure and our provider ecosystem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Presence at one or more of the datacenter/peering interconnection facilities listed in ",(0,o.kt)("a",{parentName:"p",href:"#peering"},"Peering"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sufficient traffic volume (as determined by CommodityStream, at its discretion)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Up to date service documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ability to participate in secured e2e chat (e.g. secured Slack chat room)."))),(0,o.kt)("h2",{id:"peering"},"Peering"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publicly routable address space (static, at least /24)"),(0,o.kt)("li",{parentName:"ul"},"24x7 NOC/DevOps contact capable of resolving technical/routing issues (response time t.b.d.)."),(0,o.kt)("li",{parentName:"ul"},"Presence at one or more of the datacenter/peering interconnection facilities listed (OVHCloud, Hetzner, etc)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This ASN List is non-exhaustive. Last updated on 2022.08.13")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"ASN")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Traffic")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"12322"),(0,o.kt)("td",{parentName:"tr",align:null},"PROXAD:"),(0,o.kt)("td",{parentName:"tr",align:null},"58.57k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"396982"),(0,o.kt)("td",{parentName:"tr",align:null},"GOOGLE-CLOUD-PLATFORM:"),(0,o.kt)("td",{parentName:"tr",align:null},"31.64k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"205016"),(0,o.kt)("td",{parentName:"tr",align:null},"HERNLABS:"),(0,o.kt)("td",{parentName:"tr",align:null},"21.28k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200982"),(0,o.kt)("td",{parentName:"tr",align:null},"ZT-TOMSK-AS:"),(0,o.kt)("td",{parentName:"tr",align:null},"20.02k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"13335"),(0,o.kt)("td",{parentName:"tr",align:null},"CLOUDFLARENET:"),(0,o.kt)("td",{parentName:"tr",align:null},"14.36k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"24940"),(0,o.kt)("td",{parentName:"tr",align:null},"HETZNER-AS:"),(0,o.kt)("td",{parentName:"tr",align:null},"89k")))),(0,o.kt)("h4",{id:"latency-benchmarking"},"Latency Benchmarking"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Why is "ping time to CommodityStream" (or packet drop rate) not a good measure of the performance of CommodityStream services?')),(0,o.kt)("p",null,"CommodityStream optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user."),(0,o.kt)("p",null,"CommodityStream does not recommend using ping time to api.securerpc.com/v1 (or any other CommodityStream service, including SecureRpc Gateway) as a measure of the actual performance of CommodityStream services for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CommodityStream services, are not designed as ICMP network testing services"),(0,o.kt)("li",{parentName:"ul"},"Many networks, including CommodityStream, rate limit ICMP"),(0,o.kt)("li",{parentName:"ul"},"ICMP ping or traceroute traffic can be discarded or delayed en-route to CommodityStream"),(0,o.kt)("li",{parentName:"ul"},"The termination point of the TCP/UDP session with CommodityStream may not represent the full network path between a user and the service"),(0,o.kt)("li",{parentName:"ul"},"User requests may be served from locations other than the destination of the initial IP termination point")),(0,o.kt)("p",null,"Even a complete lack of response to ICMP traffic may not reflect any sort of issue with CommodityStream service performance."),(0,o.kt)("h4",{id:"what-is-the-content-delivery-path-that-commoditystream-optimizes"},"What is the content delivery path that CommodityStream optimizes?"),(0,o.kt)("p",null,"CommodityStream is interested in the entire latency between the end-user node and the part of our infrastructure serving the traffic."),(0,o.kt)("p",null,"This will include segments of CommodityStream\u2019s internal network beyond where the session is terminated. It might also include network paths that are closer to the user than the initial session termination point."),(0,o.kt)("p",null,"Individual RPC requests or responses may have content served from a number of different parts of CommodityStream\u2019s serving infrastructure."),(0,o.kt)("h4",{id:"will-commoditystream-offer-validator-nodes-in-all-countries-and-regions"},"Will CommodityStream offer validator nodes in all countries and regions?"),(0,o.kt)("p",null,"We face certain legal limitations to providing validator nodes in some countries, Generally, if a network operator or ISP meets our policies and operates in a country where we don\u2019t face restrictions, we can deploy validator nodes."),(0,o.kt)("h4",{id:"does-commoditystream-operate-network-services-within-the-united-states-of-america"},"Does CommodityStream operate network services within the United States of America?"),(0,o.kt)("p",null,"At this time CommodityStream does not directly operate any networked services within the United States of America."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"RFC2622 - \u201cRouting Policy Specification Language (RPSL)\u201d: Describes the basic RPSL object syntax ",(0,o.kt)("br",null)," RFC4012 - \u201cRouting Policy Specification Language next generation (RPSLng)\u201d: Describes useful additions to the RPSL language such as IPv6 route6 objects ",(0,o.kt)("br",null)," RFC2650 - \u201cUsing RPSL in Practice\u201d: A tutorial on generating RPSL objects, much like this article ",(0,o.kt)("br",null)," RFC7682 - \u201cConsiderations for Internet Routing Registries (IRRs) and Routing Policy Configuration: Some of the problems and lessons learned about the IRR system ",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"appendix-a-ip-denylist-example"},"Appendix A: IP Denylist Example"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Select Example of IP Deny List")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n    "denylist": "global",\n    "values": [\n        {\n            "name": "CloudGroup001",\n            "id": 1,\n            "version": "2022.08.01",\n            "properties": {\n                "addressPrefixes": [\n                    "13.72.19.232/32",\n                    "13.72.32.58/32",\n                    "13.72.32.105/32",\n                    "13.72.37.0/32",\n                    "13.72.37.92/32",\n                    "13.72.37.116/32",\n                    "13.72.37.201/32",\n                    "13.72.38.177/32",\n                    "20.141.11.42/31",\n                    "52.127.5.156/30",\n                    "52.127.10.212/30",\n                    "52.227.137.251/32",\n                    "52.227.139.94/32",\n                    "52.235.253.236/31",\n                    "52.244.50.212/32",\n                    "52.244.55.231/32",\n                    "52.244.65.137/32",\n                    "52.244.200.31/32",\n                    "52.244.200.92/32",\n                    "52.244.201.244/32",\n                    "52.244.201.250/32",\n                    "52.244.202.7/32",\n                    "52.244.202.155/32",\n                    "52.244.203.6/32",\n                    "52.244.203.11/32",\n                    "52.244.203.159/32",\n                    "52.244.203.238/32",\n                    "52.244.204.5/32",\n                    "52.244.204.137/32",\n                    "52.244.204.158/32",\n                    "52.244.204.184/32",\n                    "52.244.204.225/32",\n                    "52.244.205.3/32",\n                    "52.244.205.91/32",\n                    "52.244.205.238/32",\n                    "52.244.206.12/32",\n                    "52.244.206.58/32",\n                    "52.244.206.69/32",\n                    "52.244.206.83/32",\n                    "52.244.206.225/32",\n                    "52.244.207.78/32",\n                    "52.244.218.1/32",\n                    "52.244.218.34/32",\n                    "52.244.218.38/32",\n                    "52.244.218.47/32",\n                    "52.244.228.130/32",\n                    "52.244.229.149/32",\n                    "52.244.230.191/32",\n                    "52.244.231.99/32",\n                    "52.244.231.176/32",\n                    "52.244.248.114/32",\n                    "52.244.255.133/32",\n                    "2001:489a:3103:402::178/125",\n                    "2001:489a:3203:402::178/125",\n                    "2001:489a:3303:402::178/125",\n                    "2001:489a:3403:402::178/125",\n                    "2001:489a:3604:402::178/125"\n                ],\n                "flags": ["UFW", "FED", "TCP", "UDP"]\n            }\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"appendix-b-cidr-denylist"},"Appendix B: CIDR Denylist"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Last synced on 2022.08.24")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/manifoldfinance/dns/tree/master/cidr/denylist"},"see the canonical list here")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"CIDR_DENYLIST")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"29.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"33.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"35.71.115.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"35.71.116.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.96.0/19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.176.0/22")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.224.0/20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.40.104/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.193.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.9.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.22.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.198.32/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.248.224/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.249.112/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.95.100.0/22")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.119.208.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.222.0.0/17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"54.239.0.128/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"54.239.1.64/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"55.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"76.223.168.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"96.127.0.0/17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"99.77.183.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.205.82.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.205.84.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.4.0/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.4.16/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.56.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.58.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.126.0/25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.156/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.160/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.168/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.192/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.208/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.165.0/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.165.140/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.253.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.253.186.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.23.64/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.61.128/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.68.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"21.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"22.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"26.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"28.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"29.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"33.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"35.71.115.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"35.71.116.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.96.0/19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.176.0/22")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.46.224.0/20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.40.104/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.61.193.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.9.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.22.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.198.32/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.248.224/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.94.249.112/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.95.100.0/22")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.119.208.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.222.0.0/17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"54.239.0.128/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"54.239.1.64/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"55.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"76.223.168.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"96.127.0.0/17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"99.77.183.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"16.0/21")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"24.0/21")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.0.0/15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.40.84/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.98.64/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.98.128/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.129.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"30.130.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32.139.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32.190.0/25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32.190.244/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32.190.248/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"11.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.28.80/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.28.88/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.28.240/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.141.0/25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.150.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.176.128/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.200.176.192/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.205.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.205.82.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"15.205.84.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.4.0/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.4.16/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.56.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.58.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.126.0/25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.156/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.160/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.168/29")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.192/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.145.208/28")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.165.0/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.252.165.140/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.253.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.253.186.0/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.0.0/16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.23.64/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.61.128/26")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18.254.68.0/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"21.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"22.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"26.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"28.0.0.0/8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.19.232/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.32.58/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.32.105/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.37.0/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.37.92/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.37.116/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.37.201/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"13.72.38.177/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"20.141.11.42/31")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.127.5.156/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.127.10.212/30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.227.137.251/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.227.139.94/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.235.253.236/31")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.50.212/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.55.231/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.65.137/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.200.31/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.200.92/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.201.244/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.201.250/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.202.7/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.202.155/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.203.6/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.203.11/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.203.159/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.203.238/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.204.5/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.204.137/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.204.158/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.204.184/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.204.225/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.205.3/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.205.91/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.205.238/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.206.12/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.206.58/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.206.69/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.206.83/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.206.225/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.207.78/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.218.1/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.218.34/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.218.38/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.218.47/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.228.130/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.229.149/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.230.191/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.231.99/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.231.176/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.248.114/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"52.244.255.133/32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2001:489a:3103:402::178/125")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2001:489a:3203:402::178/125")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2001:489a:3303:402::178/125")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2001:489a:3403:402::178/125")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2001:489a:3604:402::178/125")))))}s.isMDXComponent=!0}}]);