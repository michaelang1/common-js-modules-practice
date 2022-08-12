// 1. import multiple items:
const { helloMessage } = require('./hello-message');

// 2. import one item
// const helloMessage = require('./hello-message');

function sayMessage(message) {
	console.log(`"${message}"`);
}

sayMessage(helloMessage);

module.exports.sayMessage = sayMessage;
