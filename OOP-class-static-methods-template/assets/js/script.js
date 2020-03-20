class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals (a, b){
        return a.width * a.height === b.width * b.height; // ternary operator, returning true or false.
    }


    static isValidDimensions(width, height){
        return width === height;
    }
}


let square1 = new Square(8); // you do NOT need any instances of the class to use the static methods, you can call them even with these 2 lines outcommented.
let square2 = new Square(8); // you do NOT need any instances of the class to use the static methods, you can call them even with these 2 lines outcommented.


// console.log(Square.equals(square1, square2)); // static methods are called directly on the class itself, and not on the instanced objects: Square.equals().
console.log(Square.isValidDimensions(6,6));

