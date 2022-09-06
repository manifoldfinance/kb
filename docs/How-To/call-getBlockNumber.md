---
sidebar_position: 5
id: howto-get_blokcNumber
title: Requesting eth_blockNumber using NodeJs
description: How to request eth_blockNumber
---

# `eth_blockNumber`

Javascript Example

```javascript
// SPDX-License-Identifier: UPL-1.0
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
		// Not setting the content type will result in a malformed request
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

## License

Licensed under the Universal Permissive License v 1.0 as shown at <https://opensource.org/licenses/UPL>
