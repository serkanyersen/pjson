var fs = require('fs');
var root = __dirname.replace('node_modules/pjson', '');
var contents = fs.readFileSync(root + '/package.json');
var pjson = {};

if (contents) {
    pjson = JSON.parse(contents);
}

module.exports = pjson;
