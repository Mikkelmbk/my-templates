function printMessage(msg){
    console.log(msg)
}


module.exports.logMessageToConsole = printMessage; // exports the function and stores it with the name "message", this function is now called with the "message" word in other files.