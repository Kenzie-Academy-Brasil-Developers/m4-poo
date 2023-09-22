export class Person{
    //protected - restringe o uso do recurso na instância
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    saySomething(message: string){
        console.log(message);
    }

    //private - restringe o uso na instância e também na herança
    private sayMyName(){
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

export class Teacher extends Person {
    sayMyName(): void {
        console.log(`Sou o professor ${this.name}`);
    }
}