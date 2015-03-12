var path = require('path');
var fs = require('fs');

module.exports = function (args) {
    var file = args[0];
    fs.readFile(path.join(process.cwd(), file), function (err, fileContents) {
        if (err) return console.error(err);
        process.stdout.write(fileContents.toString());
    });
};