var fs = require('fs');

module.exports = function (args) {
    fs.readdir(process.cwd(), function (err, files) {
        if (err) return console.error(err);
        files.forEach(function (file) {
            console.log(file);
        });
    });
};