class Animal {
    constructor(_name){
        this.name = _name;
    }

    makeSound(){ // declare function in Animal class, make it say Generic animal sound!.
        console.log("Generic animal sound!");
    }
}


class Dog extends Animal {
    constructor(_name){
        super(_name);
    }

    makeSound(){ // overwrite function within Dog class inherited from Animal, make it say Woof woof!. (This is polymorphism)
        super.makeSound(); // super.makeSound() calls the parent (Animal) class' makeSound() method.
        console.log("Woof woof!");
    }
}


let a1 = new Animal("Mikkel");
let a2 = new Dog("Kenneth");

a1.makeSound(); // call makeSound on a1 (Animal class);
a2.makeSound(); // class makeSound on a2 (Dog class);