//public and private 

class User{
    name : string 
    age : number 
    private userId : string
    constructor(name:string, age: number, userId : string){
        this.name = name;
        this.age = age;
        this.userId = userId
    }
}

const reslut1 = new User("siva", 33, "SIVA")
//for suppose your details has in private (we use private key) 
//u wn't private u'r userId (user private => key)
//what use of private key => dont access the that keyproperty => line 17
reslut1.userId = "siva"