"use strict";(self.webpackChunkmanifold_kb=self.webpackChunkmanifold_kb||[]).push([[3318],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return b}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),b=n,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||l;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8918:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="MEV Boost Relay API",c={unversionedId:"MEV/MEV_Boost_Relay_API_docs",id:"MEV/MEV_Boost_Relay_API_docs",title:"MEV Boost Relay API",description:"MEV-Boost Relay API specification v1.0.0",source:"@site/docs/MEV/MEV_Boost_Relay_API_docs.md",sourceDirName:"MEV",slug:"/MEV/MEV_Boost_Relay_API_docs",permalink:"/docs/MEV/MEV_Boost_Relay_API_docs",draft:!1,editUrl:"https://github.com/manifoldfinance/kb/tree/trunk/docs/MEV/MEV_Boost_Relay_API_docs.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"MEV Boost",permalink:"/docs/MEV/mev-nutshell"},next:{title:"MEV Boost Relay API",permalink:"/docs/MEV/Relay_API_V01"}},d={},p=[{value:"Data types",id:"data-types",level:2},{value:"builder-specs and beacon-APIs",id:"builder-specs-and-beacon-apis",level:4},{value:"BidTrace",id:"bidtrace",level:4},{value:"SignedBidTrace",id:"signedbidtrace",level:4},{value:"ValidatorRegistration",id:"validatorregistration",level:4},{value:"ErrorResponse",id:"errorresponse",level:4},{value:"Proposer API",id:"proposer-api",level:2},{value:"Block Builder API",id:"block-builder-api",level:2},{value:"getValidators",id:"getvalidators",level:3},{value:"submitBlock",id:"submitblock",level:3},{value:"Data API",id:"data-api",level:2},{value:"ProposerPayloadsDelivered",id:"proposerpayloadsdelivered",level:3},{value:"BuilderBlocksReceived",id:"builderblocksreceived",level:3},{value:"ValidatorRegistration",id:"validatorregistration-1",level:3},{value:"Events API (WIP, TBD)",id:"events-api-wip-tbd",level:3},{value:"Subscribing to events (TBD)",id:"subscribing-to-events-tbd",level:4},{value:"Relay Infrastructure",id:"relay-infrastructure",level:2}],u={toc:p};function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mev-boost-relay-api"},"MEV Boost Relay API"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MEV-Boost Relay API specification v1.0.0")),(0,l.kt)("p",null,"The Flashbots relay is open source: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost-relay"},"https://github.com/flashbots/mev-boost-relay")),(0,l.kt)("p",null,"A relay has several responsibilities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"APIs for proposers (",(0,l.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder"},"builder-spec"),"), block builders and data transparency"),(0,l.kt)("li",{parentName:"ul"},"Handling validator registrations and block proposals in a scalable manner"),(0,l.kt)("li",{parentName:"ul"},"Block escrow, data availability, redundancy"),(0,l.kt)("li",{parentName:"ul"},"Simulate and verify blocks sent by block-builders, rate-limit if necessary",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"correct amount of fees paid to most recent feeRecipient of validator"),(0,l.kt)("li",{parentName:"ul"},"correct block attributes and transactions"),(0,l.kt)("li",{parentName:"ul"},"within the gasLimit requested by the validator")))),(0,l.kt)("h2",{id:"data-types"},"Data types"),(0,l.kt)("p",null,"A reference implementation of the data types with correct SSZ encoding and signing routines can be found in this repository: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flashbots/go-boost-utils"},"https://github.com/flashbots/go-boost-utils")),(0,l.kt)("h4",{id:"builder-specs-and-beacon-apis"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/ethereum/builder-specs"},"builder-specs")," and ",(0,l.kt)("a",{parentName:"h4",href:"https://github.com/ethereum/beacon-APIs"},"beacon-APIs")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/beacon-APIs/blob/master/types/registration.yaml"},"ValidatorRegistration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/builder-specs/blob/main/types/bellatrix/bid.yaml"},"SignedBuilderBid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/beacon-APIs/blob/master/types/bellatrix/block.yaml#L83"},"SignedBlindedBeaconBlock")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/beacon-APIs/blob/master/types/bellatrix/execution_payload.yaml"},"ExecutionPayload"))),(0,l.kt)("h4",{id:"bidtrace"},"BidTrace"),(0,l.kt)("p",null,"Represents public information about a block sent by a builder to the relay, or from the relay to the proposer. Depending on the context, ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," might represent the claimed value by a builder (not necessarily a value confirmed by the relay)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "slot": "123",\n    "parent_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "block_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "builder_pubkey": "0x7b2cb8dd64e0aafe7ea7b6c95065c9364cf99d38470c12ee807d55f7de1529ad29ce2c422e0b65e3d5a05c02caca249",\n    "proposer_pubkey": "0x8a1d7b8dd64e0aafe7ea7b6c95065c9364cf99d38470c12ee807d55f7de1529ad29ce2c422e0b65e3d5a05c02caca249",\n    "proposer_fee_recipient": "0x2b7a7b8dd64e0aafe7ea7b6c95065c9364cf99d38470c12ee807d55f7de1529ad29ce2c422e0b65e3d5a05c02caca249",\n    "gas_used": "3371033",\n    "gas_limit": "30000000",\n    "value": "1234567"\n}\n')),(0,l.kt)("p",null,"See also the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flashbots/go-boost-utils/blob/main/types/builder.go#L217"},"reference implementation of ",(0,l.kt)("inlineCode",{parentName:"a"},"BidTrace"))),(0,l.kt)("h4",{id:"signedbidtrace"},"SignedBidTrace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": BidTrace\n  "signature": "0x..."\n}\n')),(0,l.kt)("p",null,"Note: BLS signature using the builder domain (relative to the genesis fork and with a zero genesis validators root)."),(0,l.kt)("p",null,"See also the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flashbots/go-boost-utils/blob/main/types/builder.go#L230"},"reference implementation of ",(0,l.kt)("inlineCode",{parentName:"a"},"SignedBidTrace"))),(0,l.kt)("h4",{id:"validatorregistration"},"ValidatorRegistration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": {\n        "fee_recipient": "0xabcf8e0d4e9587369b2301d0790347320302cc09",\n        "gas_limit": "1",\n        "timestamp": "1",\n        "pubkey": "0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a"\n    },\n    "signature": "0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505"\n}\n')),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flashbots/go-boost-utils/blob/main/types/builder.go#L170"},"reference implementation"),")"),(0,l.kt)("h4",{id:"errorresponse"},"ErrorResponse"),(0,l.kt)("p",null,"All API errors follow this schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 400,\n    "message": "description about the error"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n    "$schema": "http://json-schema.org/draft-04/schema#",\n    "type": "object",\n    "properties": {\n        "code": {\n            "type": "integer"\n        },\n        "message": {\n            "type": "string"\n        }\n    },\n    "required": ["code", "message"]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"proposer-api"},"Proposer API"),(0,l.kt)("p",null,"Standard APIs as per ",(0,l.kt)("a",{parentName:"p",href:"https://ethereum.github.io/builder-specs/#/Builder"},"builder spec"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder/registerValidator"},"registerValidator"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /eth/v1/builder/validators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder/getHeader"},"getHeader"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /eth/v1/builder/header/{slot}/{parent_hash}/{pubkey}")," - Get an execution payload header."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder/submitBlindedBlock"},"submitBlindedBlock"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /eth/v1/builder/blinded_blocks")," - Submit a signed blinded block and get unblinded execution payload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/"},"status"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /eth/v1/builder/status"))),(0,l.kt)("h2",{id:"block-builder-api"},"Block Builder API"),(0,l.kt)("h3",{id:"getvalidators"},"getValidators"),(0,l.kt)("p",null,"Get a list of validator registrations for validators scheduled to propose in the current and next epoch."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /relay/v1/builder/validators")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Success Response")),(0,l.kt)("p",null,"Array of validatorRegistrations for the current and next epoch. Each entry includes a slot and the validator with assigned duty (if he submitted a registration previously). Slots without a registered validator are omitted."),(0,l.kt)("p",null,"Payload:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "slot": "123",\n    "entry": ValidatorRegistration\n},\n...]\n')),(0,l.kt)("p",null,"Example - API on Goerli: ",(0,l.kt)("a",{parentName:"p",href:"https://builder-relay-goerli.flashbots.net/relay/v1/builder/validators"},"https://builder-relay-goerli.flashbots.net/relay/v1/builder/validators")),(0,l.kt)("h3",{id:"submitblock"},"submitBlock"),(0,l.kt)("p",null,"Submit a new block to the relay."),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Builder signature is over SSZ encoded ",(0,l.kt)("inlineCode",{parentName:"li"},"message")," (for accountability). The message doesn\u2019t include the transactions and can be made public with the (Data API), allowing anyone to verify the builder signature.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /relay/v1/builder/blocks")),(0,l.kt)("p",null,"Request payload:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// Type:\n{\n  "signature": "0x8c795f751f812eabbabdee85100a06730a9904a4b53eedaa7f546fe0e23cd75125e293c6b0d007aa68a9da4441929d16072668abb4323bb04ac81862907357e09271fe414147b3669509d91d8ffae2ec9c789a5fcd4519629b8f2c7de8d0cce9"\n    "message": BidTrace\n  "execution_payload": ExecutionPayload\n}\n\n// Example:\n{\n  "signature": "0x8c795f751f812eabbabdee85100a06730a9904a4b53eedaa7f546fe0e23cd75125e293c6b0d007aa68a9da4441929d16072668abb4323bb04ac81862907357e09271fe414147b3669509d91d8ffae2ec9c789a5fcd4519629b8f2c7de8d0cce9"\n    "message": {\n      "slot": "123",\n    "parent_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "block_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "builder_pubkey": "0x7b2acb8dd64e0aafe7ea7b6c95065c9364cf99d38470c12ee807d55f7de1529ad29ce2c422e0b65e3d5a05c02caca249",\n    "proposer_pubkey": "0x8a1d7b8dd64e0aafe7ea7b6c95065c9364cf99d38470c12ee807d55f7de1529ad29ce2c422e0b65e3d5a05c02caca249",\n    "proposer_fee_recipient": "0xf1469083b2cbab4d1f648176bf8e26e581ebabd4",\n    "gas_used": "3371033",\n    "gas_limit": "30000000",\n        "value": "1234567",\n    },\n  "execution_payload": {\n    "parent_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "fee_recipient": "0xabcf8e0d4e9587369b2301d0790347320302cc09",\n    "state_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "receipts_root": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "logs_bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prev_randao": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "block_number": "1",\n    "gas_used": "3371033",\n    "gas_limit": "30000000",\n    "timestamp": "1",\n    "extra_data": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "base_fee_per_gas": "1",\n    "block_hash": "0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2",\n    "transactions": [\n        "0x02f878831469668303f51d843b9ac9f9843b9aca0082520894c93269b73096998db66be0441e836d873535cb9c8894a19041886f000080c001a031cc29234036afbf9a1fb9476b463367cb1f957ac0b919b69bbc798436e604aaa018c4e9c3914eb27aadd0b91e10b18655739fcf8c1fc398763a9f1beecb8ddc86"\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"(See also the ",(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/1c83e10de67d484f89c3e196579eac85"},"reference implementation for ",(0,l.kt)("inlineCode",{parentName:"a"},"BuilderSubmitBlockRequest")),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execution_payload")," is the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/v1.1.9/specs/bellatrix/beacon-chain.md#executionpayload"},"ExecutionPayload from the CL Bellatrix spec"),"."),(0,l.kt)("li",{parentName:"ul"},"The relay will simulate the block to verify properties and proposer payment")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Success response:")),(0,l.kt)("p",null,"Status code 200"),(0,l.kt)("p",null,"The block was received (but not yet checked for correctness, because simulation happens asynchronously). The response contains a receipt which includes a timestamp and ",(0,l.kt)("inlineCode",{parentName:"p"},"[BidTrace](https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5)"),"."),(0,l.kt)("p",null,"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'With the receipt, builders could formulate a case for censorship without relying on potentially false "voluntary" metrics from relay.')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": {\n    "receive_timestamp": "1655906415",\n    "bid_trace": [BidTrace](https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5),\n  },\n  "signature": "0x..."\n}\n')),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Builders will have an API to check success of block submission.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The API could allow querying by ",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"parent_hash")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"block_hash")," combination, or we could add should we add uid in the response payload"))),(0,l.kt)("li",{parentName:"ul"},"If using websockets/TCP connection, then the feedback about simulation status could be pushed to the builder.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"data-api"},"Data API"),(0,l.kt)("p",null,"Provides data about received blocks from builders and header/payload queries from proposers."),(0,l.kt)("h3",{id:"proposerpayloadsdelivered"},"ProposerPayloadsDelivered"),(0,l.kt)("p",null,"This API provides BidTraces for payloads that were delivered to proposers."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /relay/v1/data/bidtraces/proposer_payload_delivered")),(0,l.kt)("p",null,"Optional query arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slot"),": a specific slot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cursor"),": a slot cursor, where ",(0,l.kt)("inlineCode",{parentName:"li"},"limit")," number of entries up until the cursor slot is returned (note only ",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"cursor")," can be used)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit"),": maximum number of entries (100 max)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_hash"),": search for a specific blockhash"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_number"),": search for a specific EL block number")),(0,l.kt)("p",null,"The response payload is an array of ",(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5"},"BidTrace")," objects (which include blockhash, parenthash, etc). In case of reorgs there could be multiple bids per slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"[[BidTrace](https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5)]\n")),(0,l.kt)("p",null,"This API is live on all our relays: ",(0,l.kt)("a",{parentName:"p",href:"https://builder-relay-ropsten.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?limit=2"},"https://builder-relay-ropsten.flashbots.net/relay/v1/data/bidtraces/proposer_payload_delivered?limit=2")),(0,l.kt)("h3",{id:"builderblocksreceived"},"BuilderBlocksReceived"),(0,l.kt)("p",null,"This API provides BidTraces for the builder block submission for a given slot (that were verified successfully)."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /relay/v1/data/bidtraces/builder_blocks_received")),(0,l.kt)("p",null,"Optional query arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slot"),": a specific slot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit"),": maximum number of entries (100 max)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_hash"),": search for a specific blockhash"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_number"),": search for a specific EL block number")),(0,l.kt)("p",null,"The response payload is an array of ",(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5"},"BidTrace")," objects (which include blockhash, parenthash, and in this case also ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"[[BidTrace](https://www.notion.so/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5)WithTimestamp]\n")),(0,l.kt)("p",null,"This API is live on all our relays: ",(0,l.kt)("a",{parentName:"p",href:"https://builder-relay-goerli.flashbots.net/relay/v1/data/bidtraces/builder_blocks_received?limit=5"},"https://builder-relay-goerli.flashbots.net/relay/v1/data/bidtraces/builder_blocks_received?limit=5")),(0,l.kt)("h3",{id:"validatorregistration-1"},"ValidatorRegistration"),(0,l.kt)("p",null,"Return the latest validator registration for a given pubkey. Useful to check whether your own registration was successful."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /relay/v1/data/validator_registration?pubkey=_pubkey_")),(0,l.kt)("p",null,"The response payload is either an error or a validator registration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ValidatorRegistration\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://boost-relay.flashbots.net/relay/v1/data/validator_registration?pubkey=0xb606e206c2bf3b78f53ebff8be8e8d4af2f0da68646b5642c4d511b15ab5ddb122ae57b48eab614f8ca5bafbe75a5999"},"Example")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"events-api-wip-tbd"},"Events API (WIP, TBD)"),(0,l.kt)("p",null,"this events API is still work in progress and to be discussed and decided upon."),(0,l.kt)("h4",{id:"subscribing-to-events-tbd"},"Subscribing to events (TBD)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /relay/v1/data/events/realtime")),(0,l.kt)("p",null,"The data is accessible by ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events"},"Server-Side-Events stream subscription")," (like the ",(0,l.kt)("inlineCode",{parentName:"p"},"[/eth/v1/events")," API exposed by BN](",(0,l.kt)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/#/Events/eventstream"},"https://ethereum.github.io/beacon-APIs/#/Events/eventstream"),")). Consumers should use\xa0",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/server-sent-events.html#the-eventsource-interface"},"eventsource")," implementation to listen on those events. The events are delayed by a few slots."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"relay-infrastructure"},"Relay Infrastructure"),(0,l.kt)("p",null,"This is a simplified infrastructure diagram:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4460f24-9643-470a-a956-d886bf92e354/Screenshot_2022-06-22_at_17.54.56.png",alt:"Screenshot 2022-06-22 at 17.54.56.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Validator registrations need to be handled in a scalable fashion, independently of the other proposer APIs (",(0,l.kt)("inlineCode",{parentName:"li"},"getHeader"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"submitBlindedBlock"),"). The burst of up to 1M validator registrations each epoch requires a lot of resources to process, verify and save to a database."),(0,l.kt)("li",{parentName:"ul"},"Block submissions need to be verified by simulating the full block, and the relay needs to be prepared to throttle any individual builder in case of spam or other issues (continuous invalid blocks or incorrect proposer payment)."),(0,l.kt)("li",{parentName:"ul"},"Operating a relay is infrastructure-intensive, and bugs can negatively impact Eth2 consensus. One of the solutions Flashbots is working on is a service called ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/142"},"Relay Monitor"),", which tracks relay performance and helps proposers interact only with healthy ones.")))}b.isMDXComponent=!0}}]);