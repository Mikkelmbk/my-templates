function addNumbers(a, b){
    const addedNumbers = (a + b);
    outputResult(`The result of ${a} + ${b} is ${addedNumbers}`);
}
function subtractNumbers(a, b){
    const subtractedNumbers = (a - b);
    outputResult(`The result of ${a} - ${b} is ${subtractedNumbers}`);
}


function outputResult(result){ // this function is not exported, so it cannot be called in other files, however calling addNumbers or subtractNumbers will utilize this function, thus making it a "Helping" function that is only useable through the exported functions.
    console.log(result);
}


module.exports = {
    addNumbers,
    subtractNumbers
}