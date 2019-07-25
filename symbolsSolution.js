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
        this.getColor = () => {
            return this[CARCOLOR];
        }
        this.setColor = () =>{
            this[CARCOLOR] = "Black";
        }
        this.getModel = () => {
            return this[CARMODEL];
        }
        this.setModel = () =>{
            this[CARMODEL] = "Land Rover";
        }
        this.getMaker = () => {
            return this[CARMAKE];
        }
        this.setMaker = () =>{
            this[CARMAKE] = "Jaguar";
        }
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `blue`;
console.log(myCar.color);
console.log(myCar);