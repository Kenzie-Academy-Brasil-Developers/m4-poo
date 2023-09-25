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

// Herança

export class Student extends Person{
    module: string;

    constructor(name: string, module: string){
        super(name);
        this.module = module;
    }

    sayMyModule(){
        console.log(`Estou matriculado no módulo: ${this.module}`);
    }
}

// Polimorfismo

export class Teacher extends Person {}
