//objects
//object is a data in this data have mutilple datetype 
const objectss = {
    name : "siva",
    age: 23,
    number : 9392673914
}

console.log(objectss); // objectss {name : "siva", age : 23, number : 9392673914}

console.log(objectss.name) // we has to access a value in objectss variable (use dot notation)
console.log(objectss["name"]) // we has to access a value in objectss variable (use dot bracket notation)

//multiple way to create a objects => => factory function , constructor function 

//let see factory function 
/*function functionName(parameter1, parameter2, ...) {
    return {
        property1: parameter1,
        property2: parameter2,
        ...
        ...
      }
    }
let myObject = functionName(arg1, arg2, ...)*/

function createCar(color, brand) {
    return {
      color: color,
      brand: brand,
      start: function() {
        console.log("started");
      }
    };
  }
  
let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");
  
console.log(car1);  // Object { color: "blue", brand: "Audi", start: ƒ() }
console.log(car2);  // Object { color: "red", brand: "Tata", start: ƒ() }
console.log(car3);  // Object { color: "green", brand: "BMW", start: ƒ() }
// constructor function 
/*function FunctionName(parameter1, parameter2, ...) {
    this.property1 = parameter1;
    this.property2 = parameter2;
    ...
    ...
  }
let myObject = new FunctionName(arg1, arg2, ...)*/

function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
  
let car4 = new Car("blue", "Audi");
console.log(car1);  // Car { }
