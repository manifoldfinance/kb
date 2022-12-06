"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[4286],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),o=["components"],r={},d="Milestone 1 - kintsugi testnet",s={unversionedId:"MEV/Relay/milestone1",id:"MEV/Relay/milestone1",title:"Milestone 1 - kintsugi testnet",description:"This initial milestone provides simple middleware logic with minimal consensus client changes, simple networking, no validator authentication, and manual safety mechanism",source:"@site/docs/MEV/Relay/milestone1.md",sourceDirName:"MEV/Relay",slug:"/MEV/Relay/milestone1",permalink:"/docs/MEV/Relay/milestone1",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/MEV/Relay/milestone1.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"`registerValidator` errors",permalink:"/docs/MEV/Relay/Troubleshooting"},next:{title:"Developers",permalink:"/docs/category/developers"}},p={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Block Proposal",id:"block-proposal",level:3},{value:"Specification",id:"specification",level:2},{value:"required client modifications",id:"required-client-modifications",level:3},{value:"API Docs",id:"api-docs",level:2},{value:"engine_forkchoiceUpdatedV1",id:"engine_forkchoiceupdatedv1",level:3},{value:"engine_getPayloadV1",id:"engine_getpayloadv1",level:3},{value:"builder_getPayloadHeaderV1",id:"builder_getpayloadheaderv1",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"builder_proposeBlindedBlockV1",id:"builder_proposeblindedblockv1",level:3},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"relay_getPayloadHeaderV1",id:"relay_getpayloadheaderv1",level:3},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4},{value:"relay_proposeBlindedBlockV1",id:"relay_proposeblindedblockv1",level:3},{value:"Request",id:"request-3",level:4},{value:"Response",id:"response-3",level:4},{value:"Types",id:"types",level:3},{value:"SignedMEVPayloadHeader",id:"signedmevpayloadheader",level:4},{value:"MEVPayloadHeader",id:"mevpayloadheader",level:4},{value:"SignedBlindedBeaconBlock",id:"signedblindedbeaconblock",level:4},{value:"BlindedBeaconBlock",id:"blindedbeaconblock",level:4},{value:"BlindedBeaconBlockBody",id:"blindedbeaconblockbody",level:4}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"milestone-1---kintsugi-testnet"},"Milestone 1 - kintsugi testnet"),(0,l.kt)("p",null,"This initial milestone provides simple middleware logic with minimal consensus client changes, simple networking, no validator authentication, and manual safety mechanism"),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("h3",{id:"block-proposal"},"Block Proposal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sequence"},"participant consensus\nparticipant mev_boost\nparticipant execution\nparticipant relays\nTitle: Block Proposal\nNote over consensus: wait for allocated slot\nconsensus->mev_boost: engine_forkchoiceUpdatedV1\nmev_boost->execution: engine_forkchoiceUpdatedV1\nmev_boost->relays: engine_forkchoiceUpdatedV1\nNote over mev_boost: begin polling\nmev_boost->relays: relay_getPayloadHeaderV1\nconsensus->mev_boost: builder_getPayloadHeaderV1\nmev_boost->execution: engine_getPayloadV1\nNote over mev_boost: select best payload\nmev_boost--\x3econsensus: builder_getPayloadHeaderV1 response\nNote over consensus: sign the block\nconsensus->mev_boost: builder_proposeBlindedBlockV1\nNote over mev_boost: identify payload source\nmev_boost->relays: relay_proposeBlindedBlockV1\nNote over relays: validate signature\nrelays--\x3emev_boost: relay_proposeBlindedBlockV1 response\nmev_boost--\x3econsensus: builder_proposeBlindedBlockV1 response\n")),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"mev-boost must be initialized with a list of (",(0,l.kt)("inlineCode",{parentName:"li"},"BLSPublicKey"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"RelayURI"),") pairs representing trusted relays."),(0,l.kt)("li",{parentName:"ol"},"mev-boost must intercept ",(0,l.kt)("a",{parentName:"li",href:"#engine_forkchoiceupdatedv1"},(0,l.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1"))," call from the BN -> EC and forward it to all connected relays to communicate ",(0,l.kt)("inlineCode",{parentName:"li"},"feeRecipient"),"."),(0,l.kt)("li",{parentName:"ol"},"mev-boost must begin polling connected relays for their ",(0,l.kt)("a",{parentName:"li",href:"#signedmevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedMEVPayloadHeader"))," using ",(0,l.kt)("a",{parentName:"li",href:"#relay_getpayloadheaderv1"},(0,l.kt)("inlineCode",{parentName:"a"},"relay_getPayloadHeaderV1"))," requests."),(0,l.kt)("li",{parentName:"ol"},"mev-boost must verify the returned ",(0,l.kt)("a",{parentName:"li",href:"#signedmevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedMEVPayloadHeader"))," signature matches the BLS key associated with the IP of the relay and has a matching ",(0,l.kt)("inlineCode",{parentName:"li"},"payloadId"),"."),(0,l.kt)("li",{parentName:"ol"},"upon receiving a ",(0,l.kt)("a",{parentName:"li",href:"#builder_getpayloadheaderv1"},(0,l.kt)("inlineCode",{parentName:"a"},"builder_getPayloadHeaderV1"))," request from the BN, mev-boost must return the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadHeaderV1"))," with the highest associated ",(0,l.kt)("inlineCode",{parentName:"li"},"feeRecipientBalance"),". If no eligible payload is received from a relay, mev-boost must request and return a payload from the local execution client using ",(0,l.kt)("a",{parentName:"li",href:"#engine_getpayloadv1"},(0,l.kt)("inlineCode",{parentName:"a"},"engine_getPayloadV1")),"."),(0,l.kt)("li",{parentName:"ol"},"the BN must use the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadHeaderV1"))," received to assemble and sign a ",(0,l.kt)("a",{parentName:"li",href:"#signedblindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedBlindedBeaconBlock"))," and return it to mev-boost using ",(0,l.kt)("a",{parentName:"li",href:"#builder_proposeblindedblockv1"},(0,l.kt)("inlineCode",{parentName:"a"},"builder_proposeBlindedBlockV1")),"."),(0,l.kt)("li",{parentName:"ol"},"mev-boost must forward the ",(0,l.kt)("a",{parentName:"li",href:"#signedblindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedBlindedBeaconBlock"))," to all connected relays and attach the matching ",(0,l.kt)("a",{parentName:"li",href:"#signedmevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedMEVPayloadHeader"))," using ",(0,l.kt)("a",{parentName:"li",href:"#relay_proposeblindedblockv1"},(0,l.kt)("inlineCode",{parentName:"a"},"relay_proposeBlindedBlockV1"))," to inform the network of which relay created this payload."),(0,l.kt)("li",{parentName:"ol"},"if an ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadV1"))," is returned, mev-boost must verify that the root of the transaction list matches the expected transaction root from the ",(0,l.kt)("a",{parentName:"li",href:"#signedblindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedBlindedBeaconBlock"))," before returning it to the BN.")),(0,l.kt)("h3",{id:"required-client-modifications"},"required client modifications"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"consensus client must implement ",(0,l.kt)("a",{parentName:"li",href:"https://hackmd.io/@paulhauner/H1XifIQ_t#Change-1-Blind-Transaction-Signing"},"blind transaction signing"))),(0,l.kt)("h2",{id:"api-docs"},"API Docs"),(0,l.kt)("p",null,"Methods are prefixed using the following convention:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"engine")," prefix indicates calls made to the execution client. These methods are specified in the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.5/src/engine/specification.md"},"execution engine APIs"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"builder")," prefix indicates calls made to the mev-boost middleware."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"relay")," prefix indicates calls made to a relay.")),(0,l.kt)("h3",{id:"engine_forkchoiceupdatedv1"},"engine_forkchoiceUpdatedV1"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.5/src/engine/specification.md#engine_forkchoiceupdatedv1"},"engine_forkchoiceUpdatedV1"),"."),(0,l.kt)("h3",{id:"engine_getpayloadv1"},"engine_getPayloadV1"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.5/src/engine/specification.md#engine_getpayloadv1"},"engine_getPayloadV1"),"."),(0,l.kt)("h3",{id:"builder_getpayloadheaderv1"},"builder_getPayloadHeaderV1"),(0,l.kt)("h4",{id:"request"},"Request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"builder_getPayloadHeaderV1")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"payloadId"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"DATA"),", 8 Bytes - Identifier of the payload build process")))),(0,l.kt)("h4",{id:"response"},"Response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadHeaderV1"))),(0,l.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens while getting the payload.")),(0,l.kt)("h3",{id:"builder_proposeblindedblockv1"},"builder_proposeBlindedBlockV1"),(0,l.kt)("h4",{id:"request-1"},"Request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"builder_proposeBlindedBlockV1")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#signedblindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedBlindedBeaconBlock")))))),(0,l.kt)("h4",{id:"response-1"},"Response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadV1"))),(0,l.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens while proposing the payload.")),(0,l.kt)("p",null,"Technically, this call only needs to return the ",(0,l.kt)("inlineCode",{parentName:"p"},"transactions")," field of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadV1")),", but we return the full payload for simplicity."),(0,l.kt)("h3",{id:"relay_getpayloadheaderv1"},"relay_getPayloadHeaderV1"),(0,l.kt)("h4",{id:"request-2"},"Request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"relay_getPayloadHeaderV1")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"payloadId"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"DATA"),", 8 Bytes - Identifier of the payload build process")))),(0,l.kt)("h4",{id:"response-2"},"Response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result: ",(0,l.kt)("a",{parentName:"li",href:"#signedmevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedMEVPayloadHeader"))),(0,l.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens while getting the payload.")),(0,l.kt)("h3",{id:"relay_proposeblindedblockv1"},"relay_proposeBlindedBlockV1"),(0,l.kt)("h4",{id:"request-3"},"Request"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method: ",(0,l.kt)("inlineCode",{parentName:"li"},"relay_proposeBlindedBlockV1")),(0,l.kt)("li",{parentName:"ul"},"params:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#signedblindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedBlindedBeaconBlock"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#signedmevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"SignedMEVPayloadHeader")))))),(0,l.kt)("h4",{id:"response-3"},"Response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadV1"))),(0,l.kt)("li",{parentName:"ul"},"error: code and message set in case an exception happens while proposing the payload.")),(0,l.kt)("p",null,"Technically, this call only needs to return the ",(0,l.kt)("inlineCode",{parentName:"p"},"transactions")," field of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadV1")),", but we return the full payload for simplicity."),(0,l.kt)("h3",{id:"types"},"Types"),(0,l.kt)("h4",{id:"signedmevpayloadheader"},"SignedMEVPayloadHeader"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/phase0/beacon-chain.md#custom-types"},"here")," for the definition of fields like ",(0,l.kt)("inlineCode",{parentName:"p"},"BLSSignature")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,l.kt)("a",{parentName:"li",href:"#mevpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"MEVPayloadHeader"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signature"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"BLSSignature"))),(0,l.kt)("h4",{id:"mevpayloadheader"},"MEVPayloadHeader"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payloadHeader"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayloadheader"},(0,l.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadHeaderV1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"feeRecipient"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Data"),", 20 Bytes - the fee recipient address requested by the validator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"feeRecipientBalance"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Quantity"),", 256 Bits - the ending balance of the feeRecipient address")),(0,l.kt)("p",null,"Note: the feeRecipient must match the suggestedFeeRecipient address provided in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.5/src/engine/specification.md#payloadattributesv1"},(0,l.kt)("inlineCode",{parentName:"a"},"PayloadAttributesV1"))," of the associated ",(0,l.kt)("a",{parentName:"p",href:"#engine_forkchoiceupdatedv1"},(0,l.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1"))," request."),(0,l.kt)("h4",{id:"signedblindedbeaconblock"},"SignedBlindedBeaconBlock"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/phase0/beacon-chain.md#custom-types"},"here")," for the definition of fields like ",(0,l.kt)("inlineCode",{parentName:"p"},"BLSSignature")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,l.kt)("a",{parentName:"li",href:"#blindedbeaconblock"},(0,l.kt)("inlineCode",{parentName:"a"},"BlindedBeaconBlock"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signature"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"BLSSignature"))),(0,l.kt)("h4",{id:"blindedbeaconblock"},"BlindedBeaconBlock"),(0,l.kt)("p",null,"This is forked from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/phase0/beacon-chain.md#beaconblock"},"here")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"BlindedBeaconBlockBody")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class BlindedBeaconBlock(Container):\n    slot: Slot\n    proposer_index: ValidatorIndex\n    parent_root: Root\n    state_root: Root\n    body: BlindedBeaconBlockBody\n")),(0,l.kt)("h4",{id:"blindedbeaconblockbody"},"BlindedBeaconBlockBody"),(0,l.kt)("p",null,"This is forked from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#beaconblockbody"},"here")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"execution_payload")," replaced with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.6/specs/merge/beacon-chain.md#executionpayloadheader"},"execution_payload_header")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class BlindedBeaconBlockBody(Container):\n    randao_reveal: BLSSignature\n    eth1_data: Eth1Data\n    graffiti: Bytes32\n    proposer_slashings: List[ProposerSlashing, MAX_PROPOSER_SLASHINGS]\n    attester_slashings: List[AttesterSlashing, MAX_ATTESTER_SLASHINGS]\n    attestations: List[Attestation, MAX_ATTESTATIONS]\n    deposits: List[Deposit, MAX_DEPOSITS]\n    voluntary_exits: List[SignedVoluntaryExit, MAX_VOLUNTARY_EXITS]\n    sync_aggregate: SyncAggregate\n    execution_payload_header: ExecutionPayloadHeader\n")))}m.isMDXComponent=!0}}]);