//arrays methods 
//finding elements => => =>
//includes 
const arrays = [1, 2, 3, 4, 5];
const reslut = arrays.includes(2);
console.log(reslut); //if Element is in arrays it return (true) else it return(false)
//output is true 

//findIndex()
let arrays1 = [6, 1, 2, 3, 4, 5];
let reslut1 = arrays.findIndex(function(eachitem) {
    if (eachitem === 4) {
        return true;
    } else {
        return false;
    }
});
console.log(reslut1);
//it return a frist index of arrays => else it return -1 

//its same as indexOf()

//adding elements => => => 
//push 
let arrays2 = [6, 1, 2, 3, 4, 5];
arrays2.push(7);
console.log(arrays2); // it adding in the last element Array [6, 1, 2, 3, 4, 5, 7]
//unshift 
let arrays3 = [6, 1, 2, 3, 4, 5];
arrays3.push(8);
console.log(arrays3); // it adding in the last element Array [6, 1, 2, 3, 4, 5, 8];
//splice
let arrays4 = [6, 1, 2, 3, 4, 5];
arrays4.splice(2, 0, 9);
console.log(arrays4); //its syntax is array.splice(startin, deletecount, items) => => Array [6, 1, 9, 2, 3, 4, 5];

//deleting elements => => => 
//pop()
let arrays5 = [6, 1, 2, 3, 4, 5];
arrays5.pop();
console.log(arrays5); // it deleting in the last element Array [6, 1, 2, 3, 4, 5]
//shift 
let arrays6 = [6, 1, 2, 3, 4, 5];
arrays6.shift();
console.log(arrays6); // it deleting in the frist element Array [6, 1, 2, 3, 4, 5, 7] 
//splice 
let arrays7 = [6, 1, 2, 3, 4, 5];
arrays7.splice(1, 2); //its syntax is array.splice(startin, deletecount) => => Array [6, 3, 4, 5];
console.log(arrays7); // it adding in the last element Array [6, 1, 2, 3, 4, 5, 7];

//combining elements => => => 
//concat 
let array8 = [1, 2, 3];
let array9 = [4, 5, 6];
let reslut9 = array8.concat(array9);
console.log(reslut9); //Array [1, 2, 3, 4, 5, 6] //adding the Array elements 
//slice 
let array10 = [1, 2, 3];
let array11 = [4, 5, 7];
let reslut10 = array10.concat(array11);
console.log(reslut10); //Array [1, 2, 3, 4, 5, 7] ;

//joining => => => 
let array12 = ["water", "box", "apple"];
let reslut11 = array12.join(",");
console.log(reslut11); //water,box,apple

//sorting the Array elements in the asc to desc => => => 
let array13 = [3, 2, 1];
let reslut13 = array13.sort();
console.log(reslut13); //Array [1, 2, 3];