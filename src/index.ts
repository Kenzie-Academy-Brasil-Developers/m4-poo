// POO
// class - encapsula

class Person{
    name: string = "Alex";

    sayHello(message: string){
        console.log(message);
    }
}

const person = new Person();
console.log(person.name);
person.sayHello("Olá pessoal, me chamo Alex!");
