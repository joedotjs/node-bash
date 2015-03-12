var command = process.argv[2];
var availableCommands = require('./commands');

if (availableCommands[command]) {
    availableCommands[command](process.argv.slice(3));
}