function printMessage(msg){
    handleMessage(`My name is ${msg}`);
}

function handleMessage(msg){// this function is not exported, so it cannot be called in other files, however calling addNumbers or subtractNumbers will utilize this function, thus making it a "Helping" function that is only useable through the exported functions.
    console.log(`${msg} and I am 25 years of age.`);
}

module.exports.logMessageToConsole = printMessage; // exports the function and stores it with the name "message", this function is now called with the "message" word in other files.