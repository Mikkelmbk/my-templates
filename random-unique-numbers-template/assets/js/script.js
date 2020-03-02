var numbers = new Set(); // Set acceptere KUN unikke værdier.

while(numbers.size<10){ // .size er noget man kan bruge på Set objekter, den kigger på størrelsen af objektet.
    numbers.add(1+Math.floor(Math.random() * 100)); // .add tilføjer en værdi til Set Objektet, men KUN hvis den værdi ikke allerede findes, derfor kan forløkken her kører mere end 10 gange, da den ikke kigger på antal værdier generetet, men derimod antal UNIKKE værdier til stede i Set objektet.
}
numbers.forEach((number)=>{ // forEacher på Set Objektet.
console.log('number: ', number);

})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set



