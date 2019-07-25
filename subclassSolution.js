
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this._strength += 5;
    }
    get name() {
        
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}

class Human extends superhero {
    constructor(healthpoints, ...superherostuff) {
        super(...superherostuff);
        this._healthpoints = healthpoints;
    //4. Added 2 more properties to Human class - city and state (private to human class)
        var city;
        this.setCity = (cityName) => {
            city = cityName
        }
        this.getCity = () => {
            return city;
        }
        var state;
        this.setState = (stateName) =>{
            state = stateName;
        }
        this.getState = () => {
            return state;
        }

    }
    set name(name) {
         this._name = name;
    }
    //1. Implemented the custom function to add "Mr" to name property in subclass;
    editName = () => {
        this._name = `Mr ${this._name}`;
    }
    //2. Implement an overide method in subclass which will increment the power by 2
    powerUp = () =>{
        this._strength += 2; 
    }
    //3. Implement a method in subclass to reduce the power by half
    powerDown = () => {
        this._strength /= 2;
    }
}
const details = [20, "Bill", 10, 8]
const hero3 = new Human(...details);
console.log(hero3);
hero3.name = "sai";
console.log(hero3)
//const hero4 = new superhero(20, "abc", 8);
//console.log(hero4);
hero3.editName();
console.log(hero3);
hero3.powerUp();
console.log(hero3);
