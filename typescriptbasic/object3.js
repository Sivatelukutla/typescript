//Object.keys()

const obj = {
    name : "siva",
    age : 24,
    number : 9392673814,
    city : "podili"
}

//Object.keys() function is used to get the only keys of the obj => that's times we use Object.keys() 

console.log(Object.keys(obj)); // it's returns a array => [ 'name', 'age', 'number', 'city' ] 

//Object.values()

const obj1 = {
    name : "siva",
    age : 24,
    number : 9392673814,
    city : "podili"
}
////Object.values() function is used to get the only values of the obj => that's times we use Object.values() 

console.log(Object.values(obj1));  // it's returns a array => [ 'siva', 24, 9392673814, 'podili' ]

//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const obj2 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj2)); // [ ['foo', 'bar'], ['baz', 42] ]

//Object.freeze()

var obj3 = {
    name : "siva",
    age : 45,
    city : "podili"
}

Object.freeze(obj3);

//onces here freeze a any object now onwards those not change or add or remove on obj 

obj3.name = "prasad";
console.log(obj3.name);//siva

//Object.fromEntries()
//The Object.fromEntries() static method transforms a list of key-value pairs into an object.

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
]);
  
const obj4 = Object.fromEntries(entries);
  
console.log(obj4);
// Expected output: Object { foo: "bar", baz: 42 }

const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
];
const obj5 = Object.fromEntries(arr);
console.log(obj5); // { 0: "a", 1: "b", 2: "c" }

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }

//Object.getOwnPropertyDescriptor()

//The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object

const object3 = {
    property1: 42,
  };
  
const descriptor1 = Object.getOwnPropertyDescriptor(object3, 'property1');
  
console.log(descriptor1.configurable);
  // Expected output: true
  
console.log(descriptor1.value);
  // Expected output: 42
  
//Object.getOwnPropertyNames()
//static method returns an array of all properties
const object4 = {
    a: 1,
    b: 2,
    c: 3,
};
  
console.log(Object.getOwnPropertyNames(object4));
// Expected output: Array ["a", "b", "c"]
  