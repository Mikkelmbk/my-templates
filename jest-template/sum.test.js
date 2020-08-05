const sum = require('./sum'); // import the sum function from sum.js to be tested in here.

test('adds 1 + 2 to equal 3', () => { // test the exported function to check if it passes or fails the test
    expect(sum(1,2)).toBe(3);
});