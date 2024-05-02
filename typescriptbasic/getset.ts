//get and set method in class
//get means => we want a some information => we use get method 
//set is differnt to the get method 
class UserDetails{
    name : string 
    age : number 
    city : string 
    private _compound = 1
    constructor(name:string, age:number, city: string){
        this.name = name;
        this.age = age;
        this.city = city
    }

    get getName(): string{
        return `name ${this.name}`
    }

    set getNumber(value){
        if(value <= 1){
            throw new Error("hello") 
        }

        this._compound = value
    }
} 

const reslut2 = new UserDetails("siva", 55, "ongole")
