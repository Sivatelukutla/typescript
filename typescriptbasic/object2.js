//object.create()
const Person = {
    name : "siva",
    age : 20,
    number : 9392673914
}
const me = Object.create(Person);
console.log(me);//object.create() method is create a new object using a exicted as a prototype object 
// {} => _proto_ {name: "siva", age: 20, number : 9392673914}

//Object.defineProperty(object, props)

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42



