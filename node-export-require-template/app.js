const singleExport = require('./single-export'); // import all exported data from the single-export file and store it in the message variable in this file.
const multiExport = require('./multi-export');

singleExport.logMessageToConsole("Mikkel"); // we can now call all the functions exported from the single-export.js file, in here by refering to the variable we stored the required data, followed by the name the function was exported with.


multiExport.addNumbers(2, 8);
multiExport.subtractNumbers(2, 8);
