class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }

}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age); // super calls the parent (Person) Class' constructor and uses that constructor to create those properties for this (Programmer) class.
        // this.name = _name; - These 2 are created through the super function above.
        // this.age = _age; - These 2 are created through the super function above.
        
        this.yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding`);
    }
}



const programmers = [
    new Programmer('Mikkel', 25, 2),
    new Programmer('Kenneth', 38, 7),
    new Programmer('Dom', 32, 10)
]


// let person1 = new Person("Karl", 65);
// let programmer1 = new Programmer("Mikkel", 25, 2);
// person1.describe(); // describe method exists in Person class
// programmer1.describe(); // describe method exists in Programmer class, because Programmer is extended from Person, thus inheriting properties and methods from Person.
// programmer1.code(); // code method exists in Programmer class
// person1.code(); // code method DOES NOT exists in Person class


function developSoftware(programmers){
    programmers.forEach((programmer)=>{
        programmer.describe();
        programmer.code();
    })
}


developSoftware(programmers);