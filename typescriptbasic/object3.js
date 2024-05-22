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

const object5= ["a", "b", "c", "d"];
console.log(Object.getOwnPropertyNames(object5));

//Object.getPrototypeOf()
//The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
const prototype1 = {};
const object6 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object6) === prototype1);
// Expected output: true

//Object.groupBy()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({type}) => type);
console.log(result);

//Object.hasOwn()
/* The Object.hasOwn() static method returns true if 
the specified object has the indicated property as its own property. 
If the property is inherited, or does not exist, the method returns false.
*/

const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' has not been defined

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, "prop"); // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - own property exists with value of undefined

const object7 = {
  prop: 'exists',
};

console.log(Object.hasOwn(object7, 'prop'));
// Expected output: true

console.log(Object.hasOwn(object7, 'toString'));
// Expected output: false

console.log(Object.hasOwn(object7, 'undeclaredPropertyValue'));
// Expected output: false

//Object.is() 
//The Object.is() static method determines whether two values are the same value.

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
//Object.isExtensible
//The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).
// New objects are extensible.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false


//Object.isFreeze()
// A new object is extensible, so it is not frozen.
Object.isFrozen({}); // false

// An empty object which is not extensible
// is vacuously frozen.
const vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true

// A new object with one property is also extensible,
// ergo not frozen.
const oneProp = { p: 42 };
Object.isFrozen(oneProp); // false

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // false

// Deleting that property makes the object vacuously frozen.
delete oneProp.p;
Object.isFrozen(oneProp); // true

// A non-extensible object with a non-writable
// but still configurable property is not frozen.
const nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // make non-writable
Object.isFrozen(nonWritable); // false

// Changing that property to non-configurable
// then makes the object frozen.
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // make non-configurable
Object.isFrozen(nonWritable); // true

// A non-extensible object with a non-configurable
// but still writable property also isn't frozen.
const nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// Changing that property to non-writable
// then makes the object frozen.
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// A non-extensible object with a configurable
// accessor property isn't frozen.
const accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // false

// When we make that property non-configurable it becomes frozen.
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // true

// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
const frozen = { 1: 81 };
Object.isFrozen(frozen); // false
Object.freeze(frozen);
Object.isFrozen(frozen); // true

// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen); // false

// Also by definition, a frozen object is sealed.
Object.isSealed(frozen); // true

//Object.seal()
const obj = {
  prop() {},
  foo: "bar",
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Changing property values on a sealed object
// still works.
obj.foo = "quux";

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = "the friendly duck";
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  "use strict";
  delete obj.foo; // throws a TypeError
  obj.sparky = "arf"; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // throws a TypeError
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // changes existing property value
