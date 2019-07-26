const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;

// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
    }
        get color(){
            return this[CARCOLOR];
        }
        set color(){
            this[CARCOLOR] = "Black";
        }
        get model(){
            return this[CARMODEL];
        }
        set model(){
            this[CARMODEL] = "Land Rover";
        }
        get maker(){
            return this[CARMAKE];
        }
        set maker(){
            this[CARMAKE] = "Jaguar";
        }
    
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `blue`; // defined by ceator of challenge

console.log(myCar.color);
console.log(myCar.model);
console.log(myCar.maker);