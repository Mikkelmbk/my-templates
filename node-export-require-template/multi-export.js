function addNumbers(a, b){
    const addedNumbers = (a + b);
    outputResult(`The result of ${a} + ${b} is ${addedNumbers}`);
}
function subtractNumbers(a, b){
    const subtractedNumbers = (a - b);
    outputResult(`The result of ${a} - ${b} is ${subtractedNumbers}`);
}


function outputResult(result){
    console.log(result);
}


module.exports = {
    addNumbers,
    subtractNumbers
}