"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[6974],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return t?o.createElement(m,r(r({ref:n},u),{},{components:t})):o.createElement(m,r({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1745:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var o=t(7462),a=t(3366),s=(t(7294),t(3905)),r=["components"],i={sidebar_position:3,id:"blockconstruction-message-ordering",title:"Block Construction",description:"Message Ordering and Virtual Mempool"},c=void 0,l={unversionedId:"Block-Construction/blockconstruction-message-ordering",id:"Block-Construction/blockconstruction-message-ordering",title:"Block Construction",description:"Message Ordering and Virtual Mempool",source:"@site/docs/Block-Construction/weak-ordering.md",sourceDirName:"Block-Construction",slug:"/Block-Construction/blockconstruction-message-ordering",permalink:"/docs/Block-Construction/blockconstruction-message-ordering",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/Block-Construction/weak-ordering.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"blockconstruction-message-ordering",title:"Block Construction",description:"Message Ordering and Virtual Mempool"},sidebar:"docsSidebar",previous:{title:"Network Filtering and Policies",permalink:"/docs/Block-Construction/blockconstruction-policies"},next:{title:"Sync & The Merge",permalink:"/docs/Block-Construction/Block-Sync"}},u={},d=[{value:"Message ordering",id:"message-ordering",level:2},{value:"Consensus software outage:",id:"consensus-software-outage",level:4},{value:"Execution software outage:",id:"execution-software-outage",level:4}],p={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"::: note"),(0,s.kt)("p",null,"Work In Progress Section"),(0,s.kt)("p",null,":::"),(0,s.kt)("h2",{id:"message-ordering"},"Message ordering"),(0,s.kt)("p",null,"Currently, this document and ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3675"},"EIP-3675")," assumes that the message (or PoS event as per the EIP) delivery flow from the consensus to the execution layer maintains ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistency_model#Weak_ordering"},"weak ordering"),"."),(0,s.kt)("p",null,"For instance, the following message sequence is currently permitted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plantuml"},"@startuml\ngroup engine_consensusValidated\nConsensus->Execution: engine_consensusValidated ++ : B.payload.hash\nend\n\ngroup engine_executePayload\nConsensus->Execution: engine_executePayload --++ : B.payload\nExecution--\x3e Consensus: engine_executePayloadResponse(B.payload.hash)\nend\n\ngroup engine_getPayload\nConsensus->>Execution: engine_getPayload(parent: B.payload.hash) --++\nend\n\ngroup engine_forkChoiceUpdated\nConsensus->>Execution: engine_forkChoiceUpdated(head: B.payload.hash) --++\nend\n\ngroup engine_getPayloadResponse\nExecution--\x3e Consensus: engine_getPayloadResponse(parent: B.payload.hash)\nConsensus->Execution: engine_preparePayload(parent: B.payload.hash)\nend\n@enduml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plantuml"},"@startuml\nDB--\x3eObserver: Last saved slot\nObserver--\x3eObserver: Calculate current slot\nObserver--\x3eObserver: Detect unprocessed slots\nRelays--\x3eObserver: Availability check\nRelays--\x3eObserver: Suggested payloads\nObserver--\x3eDB: Save results\n@enduml\n")),(0,s.kt)("p",null,"Currently, it is also not specified what to do if the ",(0,s.kt)("inlineCode",{parentName:"p"},"engine_forkChoiceUpdated(head: B.payload.hash)")," has been delivered ",(0,s.kt)("em",{parentName:"p"},"earlier")," than the payload it has a reference to. This document proposes to fall back to the ",(0,s.kt)("a",{parentName:"p",href:"#Consistency-checks"},"consistency check")," with further recovery procedure in such a case. Which would mean that the order of ",(0,s.kt)("em",{parentName:"p"},"some")," messages matter."),(0,s.kt)("p",null,"This section proposes to require maintaining of more strict ordering model for ",(0,s.kt)("em",{parentName:"p"},"ingress")," messages pipeline of execution clients. Namely, require ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lamport_timestamp#Causal_ordering"},"causal ordering")," to be maintained by consensus clients in the ",(0,s.kt)("em",{parentName:"p"},"egress")," message pipeline and rely on the message ordering guarantee provided by TCP protocol (messages are delivered in the same order as they were sent within a TCP session, HTTP protocol doesn ","'","t always use the same TCP session for different requests)."),(0,s.kt)("p",null,"No additional requirement to the execution client is proposed by this section. It ",(0,s.kt)("em",{parentName:"p"},"may not")," follow the order that is maintained by the ingress message pipeline while processing these messages. But, if an execution client would do this it would guarantee ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistency_model#Causal_consistency"},"causal consistency")," in a normal operating mode. The latter means that no ",(0,s.kt)("a",{parentName:"p",href:"#Consistency-checks"},"consistency checks")," or such a mechanism would be required between periods of outage. Also, depending on its architecture, an execution client ",(0,s.kt)("em",{parentName:"p"},"might")," want to follow this order and might even ",(0,s.kt)("em",{parentName:"p"},"require")," this ordering model to be followed by its ingress message pipeline."),(0,s.kt)("p",null,"It order to maintain causal ordering consensus clients will have to adhere the following set of rules:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Outgoing messages referencing the same execution block ",(0,s.kt)("em",{parentName:"li"},"must")," be sent in the following sequence:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Note over Consensus: Block B arrives\nConsensus-&gt;Execution: engine_executePayload(B.payload)\nConsensus-&gt;Execution: engine_consensusValidated(B.payload.hash)\nExecution--&gt;Consensus: engine_executePayloadResponse(B.payload.hash)\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: B.payload.hash)\nConsensus-&gt;Execution: engine_preparePayload(parent: B.payload.hash)\nConsensus-&gt;Execution: engine_getPayload(parent: B.payload.hash)\n")),(0,s.kt)("em",{parentName:"li"},"Note"),": Building a block on top of the head of ",(0,s.kt)("em",{parentName:"li"},"not canonical")," chain ",(0,s.kt)("em",{parentName:"li"},"may")," be allowed, then ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_forkchoiceUpdated(head: B.payload.hash)")," should be dropped out of this sequence."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_forkchoiceUpdated")," message referencing a payload ",(0,s.kt)("em",{parentName:"li"},"must")," be sent ",(0,s.kt)("em",{parentName:"li"},"after")," the payload gets fully validated, specifically:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Consensus-&gt;Execution: engine_executePayload(B.payload)\nConsensus-&gt;Execution: engine_consensusValidated(B.payload.hash)\nExecution--&gt;Consensus: engine_executePayloadResponse(B.payload.hash)\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: B.payload.hash)\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"engine_executePayload")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_consensusValidated")," calls ",(0,s.kt)("em",{parentName:"li"},"must")," respect the parent -",">","child relation, specifically:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Consensus-&gt;Execution: engine_executePayload(Parent.payload)\nConsensus-&gt;Execution: engine_consensusValidated(Parent.payload.hash)\nExecution--&gt;Consensus: engine_executePayloadResponse(Parent.payload.hash)\nConsensus-&gt;Execution: engine_executePayload(Child.payload)\nConsensus-&gt;Execution: engine_consensusValidated(Child.payload.hash)\n"))),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_getPayload")," call ",(0,s.kt)("em",{parentName:"li"},"must")," be made ",(0,s.kt)("em",{parentName:"li"},"only if")," its parameter set matches the set of the most recent ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_preparePayload")," call, specifically:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Consensus-&gt;Execution: engine_preparePayload(Set1)\nConsensus-&gt;Execution: engine_preparePayload(Set2)\nConsensus-&gt;Execution: engine_getPayload(Set2)\n"))),(0,s.kt)("li",{parentName:"ul"},"Maintain ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Consistency_model#Sequential_consistency"},"sequential order")," for ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_forkchoiceUpdated")," messages. It means that ",(0,s.kt)("inlineCode",{parentName:"li"},"engine_forkchoiceUpdated")," messages ",(0,s.kt)("em",{parentName:"li"},"must")," be sent respecting the order of their ",(0,s.kt)("em",{parentName:"li"},"occurrence")," in the system, specifically:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Note over Consensus: P becomes the head\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: P.payload.hash)\nNote over Consensus: P &#39;becomes the head\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: P &#39;.payload.hash)\nNote over Consensus: C &#39;becomes the head\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: C &#39;.payload.hash)\nNote over Consensus: C becomes the head\nConsensus-&gt;Execution: engine_forkchoiceUpdated(head: C.payload.hash)\n")))),(0,s.kt)("h4",{id:"consensus-software-outage"},"Consensus software outage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Note over Consensus: Outage\nConsensus-&gt;Execution: engine_consensusStatus\nNote over Execution: Catch ups with received data\nNote left of Consensus: Normal functioning\nConsensus-&gt;Execution: engine_executePayload\nConsensus-&gt;Execution: ...\n")),(0,s.kt)("h4",{id:"execution-software-outage"},"Execution software outage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sequence"},"Note over Consensus:\nNote over Execution: Outage\nConsensus-&gt;Execution: engine_executePayload\nExecution--&gt;Consensus: engine_executionStatus\nConsensus-&gt;Execution: engine_consensusStatus\nNote over Execution: Catch ups with received data\nNote left of Consensus: Block tree recovery\nConsensus-&gt;Execution: engine_executePayload\nConsensus-&gt;Execution: engine_consensusValidated\nConsensus-&gt;Execution: ...\nConsensus-&gt;Execution: engine_forkchoiceUpdated\nNote left of Consensus: Normal functioning\nConsensus-&gt;Execution: engine_executePayload\nConsensus-&gt;Execution: ...\n")))}g.isMDXComponent=!0}}]);