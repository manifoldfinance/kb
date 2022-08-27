---
sidebar_position: 3
id: community-docguide
title: DocGuide
---

# Document Guide: The Ground Truth

Stop thinking of documentation as a chore you do for others, and instead think of it as a way to explore your problem space. and the space in your head around your intuitions about the problem, so you can shine light into the murkier corners of both. Writing documentation can function as valuable knowledge capture about your problem domain even when you are the only expert about what you are trying to do.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

-   [Node.js](https://nodejs.org/en/download/) version 14 or above:
    -   When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new page

Front matter quires the following

```yaml
id: intro
```

## Start the development server

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. To work with your newly created site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Line highlighting

Highlighting with comments You can use comments with highlight-next-line, highlight-start, and highlight-end to select which lines are highlighted.

```js
function HighlightSomeText(highlight) {
	if (highlight) {
		// highlight-next-line
		return "This text is highlighted!";
	}

	return "Nothing highlighted";
}

function HighlightMoreText(highlight) {
	// highlight-start
	if (highlight) {
		return "This range is highlighted!";
	}
	// highlight-end

	return "Nothing highlighted";
}
```

### Line numbering

You can enable line numbering for your code block by using showLineNumbers key within the language meta string (don't forget to add space directly before the key).

```jsx {1,4-6,11} showLineNumbers
import React from "react";

function MyComponent(props) {
	if (props.isBar) {
		return <div>Bar</div>;
	}

	return <div>Foo</div>;
}

export default MyComponent;
```

## Dappspec - Natspec support

```solidity
pragma solidity ^0.6.12 || ^0.7.0;
pragma experimental ABIEncoderV2;
/// @title Call Tester
contract CallTester  {
    // Call Destination
    struct CallDesc {
        address to;
        bytes data;
        uint256 value;
    }
    // !Dappspec
    // make call to dest.
    function makeCalls(CallDesc[] memory calls) external payable returns (bytes memory ret) {
        for (uint i = 0; i < calls.length; i++) {
            CallDesc memory c = calls[i];
            (bool ok, bytes memory data) = c.to.call{value: c.value}(c.data);
            require(ok, "ERR");
            ret = data;
        }
    }
}
```

```solidity {1,4-6,11} showLineNumbers
pragma solidity ^0.6.12 || ^0.7.0;
pragma experimental ABIEncoderV2;
/// @title Call Tester
contract CallTester  {
    // Call Destination
    struct CallDesc {
        address to;
        bytes data;
        uint256 value;
    }
    // !Dappspec
    // make call to dest.
    function makeCalls(CallDesc[] memory calls) external payable returns (bytes memory ret) {
        for (uint i = 0; i < calls.length; i++) {
            CallDesc memory c = calls[i];
            (bool ok, bytes memory data) = c.to.call{value: c.value}(c.data);
            require(ok, "ERR");
            ret = data;
        }
    }
}
```
