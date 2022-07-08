## 🧰 Specification

> Engineering Goals and Specification

### Design goals

-   **Pre-trade privacy** Pre-trade privacy implies transactions only become publicly known after they have been included in a block. Note, this type of privacy does not exclude privileged actors such as transaction aggregators/gateways, block constructors/validators,

-   **Failed trade privacy**

Failed trade privacy implies losing bids is never included in a block, thus never exposed to the public. Failed trade privacy is tightly coupled to extraction efficiency.

-   **Complete privacy**

Complete privacy implies there are no privileged actors such as transaction aggregators/gateways block constructors/validators, etc, who can observe incoming transactions.

-   **Finality**

Finality implies it is infeasible for MEV extraction to be reversed once included in a block. This would protect against time-bandit chain re-org attacks.

### Architecture Goals

#### Redundant resources (trade cost)

Having redundant resources to avoid single points of failure. Every component can fail, but the system is robust enough that an individual outage can be tolerated.

#### Degraded results (trade quality)

For some services, it might be acceptable to trade quality for reliability. Instead of expecting every transaction to succeed, it can be tolerable for a business to see some requests fail.

#### Retry transient failures (trade latency)

If a response isn't returned to the expected time, the system sends the same request again.

### Javscript Example `eth_blockNumber`

```javascript
const axios = require("axios");
let data = JSON.stringify({
	jsonrpc: "2.0",
	method: "eth_blockNumber",
	params: [],
	id: 83,
});

const config = {
	method: "post",
	url: "https://api.sushirelay.com/v1",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 1000,
	data: data,
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
```
