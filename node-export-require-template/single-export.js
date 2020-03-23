function printMessage(msg){
    handleMessage(`My name is ${msg}`);
}

function handleMessage(msg){
    console.log(`${msg} and I am 25 years of age.`);
}

module.exports.logMessageToConsole = printMessage; // exports the function and stores it with the name "message", this function is now called with the "message" word in other files.