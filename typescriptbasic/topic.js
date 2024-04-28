//console.log("siva");
//Enum => its hold a set of constants in singel variable 
//its have three type (1)numeric (2)string (3)heterogenous 
//numeric 
var Status;
(function (Status) {
    Status[Status["Name"] = 0] = "Name";
    Status[Status["Age"] = 1] = "Age";
    Status[Status["City"] = 2] = "City";
    Status[Status["Address"] = 3] = "Address";
})(Status || (Status = {}));
//defaults value starting with zero 
//lets see 
console.log(Status.Name);
