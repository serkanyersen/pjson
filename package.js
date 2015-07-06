var fs = require('fs');
var root = __dirname.split('node_modules')[0];
var contents = fs.readFileSync(root + 'package.json');
var pjson = {};

if (contents) {
    pjson = JSON.parse(contents);
}

module.exports = pjson;
