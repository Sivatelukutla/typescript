var myArray = [];
//myArray.push(2); // here its come error because myArray variable assign a never type (in that myarray variable no type of value assign)
//so we have to give a data type (see the below code)
var myArray1 = [];
myArray1.push(22);
//myArray1.push("siva"); //here its come error in myArray1 variable assign a only number type not a string type 
//so we has to give string type also (see the below code)
var myArray2 = []; //(|=> this symbool is called a union type)
myArray2 = [22, 43, 55, 66];
myArray2 = ["prasad", "pavan", "hyderbad"];
//myArray2 = [33, 55, 77, "rakesh", "car", "parrot"];//here its error (myArray2 variable is not assign a combination of number , string type)
//in the above code we have to write another way (its see)
var myArray3 = [];
myArray3 = [22, 55, 66, 7, 6, "siva", "prasada", "hen", "pen"];
