//a feature of TypeScript that allows us to define the structure or shape of an
// object and specify the properties and methods that an object has or should have.

interface Iuser{
    name : string,
    age:number,
    address:string,
    getOf : () => string
    houseNo? : number
}

interface Persons {
    colleage : string
}

var Details: Iuser | Persons = {
    name : "siva",
    age : 22,
    address : "Agraharam",
    colleage : "akvk",
    getOf : () => {
        return "prasad"
    }
}

