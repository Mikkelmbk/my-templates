var numbers = new Set(); // Set acceptere KUN unikke værdier. Set er IKKE et array, men en Collection af Items.


while(numbers.size<10){ // .size er noget man kan bruge på Set objekter, den kigger på størrelsen af objektet.
    numbers.add(1+Math.floor(Math.random() * 100)); // .add tilføjer en værdi til Set Objektet, men KUN hvis den værdi ikke allerede findes, derfor kan forløkken her kører mere end 10 gange, da den ikke kigger på antal værdier generetet, men derimod antal UNIKKE værdier til stede i Set objektet.
}

numbers = [...numbers]; // konvertere numbers Set til et normalt array med SPREAD operatoren [...DET-DU-VIL-GØRE-TIL-ET-ARRAY];

console.log('numbers: ', numbers);
numbers.forEach((number)=>{ // forEacher Set objektet som nu er et Array grundet spread operatoren ovenover.
console.log('number: ', number);

})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set



