//create a new object 
const obj = new Object();
obj.name = "siva";
console.log(obj);//{name: "siva"}

const obj1 = new Object();
console.log(obj1); // empty object => {}

const obj2 = new Object(undefined);
console.log(obj2); // empty object => {}

const obj3 = new Object(null);
console.log(obj3); // empty object => {}

//Object.assign() 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//syntax 
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)

//the source1, source2, all are inherit in the target => target is return the value 
//Object.assing() is the getter and setter => values are get in the source and set in the target its invoules a getter and setter 





