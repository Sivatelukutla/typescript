//console.log("siva");
//Enum => its hold a set of constants in singel variable 
//its have three type (1)numeric (2)string (3)heterogenous 

//numeric 
enum Status{
    Name,
    Age,
    City,
    Address
}
//defaults value starting with zero 
//lets see 
console.log(Status.Name);//0 
console.log(Status.Age);//1
console.log(Status.City);//2
console.log(Status.Address);//3

//lets give the value to any variable 
enum profile{
    name = 5,
    age,
    city,
    address
}

console.log(profile.name); // 5 
console.log(profile.age); // 6 
console.log(profile.city); // 7 
//what's number is given to the variable the below variable is +1 

//string 
enum names{
    name = "rakesh",
    city = "ongole",
    address = "agraharam"
}

console.log(names.name); // rakesh 
console.log(names.city); //ongole 
//dot notation 
//brackets notation 
console.log(names["name"]); // rakesh 
console.log(names["city"]); //ongole

//heterogenous 

enum details{
    name = "siva",
    age = 1,
    city,
    address
}

console.log(details.name); // siva 
console.log(details.age); // 1 
console.log(details.city); // 2 
console.log(details.address); // 3