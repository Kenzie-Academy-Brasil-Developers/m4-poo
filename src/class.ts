// POO
// class - encapsula

export class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    saySomething(message: string){
        console.log(message);
    }

    sayMyName(){
        console.log(`Me chamo ${this.name}`);
    }
}