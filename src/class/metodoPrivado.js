class Person {
    #name;
    #age;
    constructor({name, age}){
        this.#name = name;
        this.#age = age;
    }
    speak(){
        return console.log(`Sua idade é ${this.#age} e você se chama ${this.#name}`)
    }
    set name(string){
        this.#name = string
    }
    get name(){
        return this.#name
    }

    set age(string){
        this.#age = string
    }
    get age(){
        return this.#age
    }
}

class Employee extends Person {
    #codelanguage;
    constructor({name, age, codelanguage}){
        super({name, age});
        this.#codelanguage = codelanguage
    }
    stack() {
        return console.log(`Nome: ${this.name}, idade: ${this.age}, programa em ${this.codelanguage}`)
    }
    set codelanguage(string){
        this.#codelanguage = string
    }
    get codelanguage(){
        return this.#codelanguage
    }
}

module.exports = Employee;