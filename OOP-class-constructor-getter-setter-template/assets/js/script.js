class Rectangle {

    constructor(_width, _height, _color){
        console.log("Rectangle is being created!");

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    get area(){ // this creates the property "area" based on the width and height of the object.
        return this.width * this.height;
    }

    set setDimensions(value){ // this sets the width and height properties to whatever the dimensions that are provided are.
        this.width = value[0];
        this.height = value[1];
        this.dimensions = this.calcDimensions(); // this calls calcDimensions which returns a string displaying both width and height, and assigns them to a new property named dimensions.
        // the set method name and the property name (setDimensions, dimensions) CANNOT be the same, as it would call itself indefinitely and crash.
    }


    calcDimensions(){
        return `${this.width} x ${this.height}`;
    }




    printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}, my area is ${this.area}`);
    }

}

let myRectangle1 = new Rectangle(5, 3, "blue");
myRectangle1.setDimensions = [8,4]; // setDimensions is the "method name" in the object, and the value is the array.
console.log('myRectangle1: ', myRectangle1);












