// POO
// class - encapsula

class Person{
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

const person1 = new Person("Alex");

person1.saySomething("Olá pessoal!");
person1.sayMyName();

const person2 = new Person("Osvaldo");

person2.sayMyName();
