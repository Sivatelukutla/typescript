abstract class getMode{
    constructor(public name:string, public age: number){

    }
}


class Instagram extends getMode{
    constructor(public name:string, public age:number){
        super(name, age)
    }
}

const result = new Instagram("siva", 22)