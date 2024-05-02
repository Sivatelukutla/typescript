//get and set method in class
//get means => we want a some information => we use get method 
//set is differnt to the get method 
class UserDetails{
    name : string 
    age : number 
    city : string 
    protected _compound = 1
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

class Users extends UserDetails{
    getNamess(){
        return this.name;
    }

    getResults(){
        return this._compound; //here its _compound tis not assign to the subsupper class (because it is private key is used=> in this stituation we use protected => it is usefull a where ever u want this key we use)
    }
}

//inheritated the UserDetails to the Users


const reslut2 = new UserDetails("siva", 55, "ongole")
