# PJSON

PJSON is a simple npm package that lets you read the package.json file.

## Usage

Install it
```
npm install pjson --save
```

and use it in your code like this

```javascript
var pjson = require('pjson');

// simply access values package.json
console.log(pjson.version);
```

## Why?

In Node.js you can already import json files by simple giving their names in the `require` statements but this approach doesn't always work well.  

First of all it's path dependent. So if your project has a nested structure you might end up with code that looks like this

```javascript
var pjson = require('../../../package.json');
```

#### TypeScript

In typescript you cannot create module definitions for relatively imported things. PJSON resolves this issue for you because you can import it just by name

#### Old versions of Node

Importing JSON files using require is only enabled in later versions of node. For old versions, PJSON might be useful

#### Because I need it

It's simple, I needed it for my own project and I though it might be useful for others as well :)
