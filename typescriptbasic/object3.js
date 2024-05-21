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
