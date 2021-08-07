class Person {
    constructor(name, occupation, age) {
        this._name = name;
        this._occupation = occupation;
        this._age = age;
    }

    hello(name, occupation, age){
        if(occupation === "dev") {
            return `Hey ${occupation}! Seja bem vindo à nossa comunidade, ${name}. Você tem ${age} anos.`
        } else{
            return `Hey ${name}! Você tem ${age} anos e é ${occupation}.`
        }
    }
}

const Pessoa = new Person;

module.exports = Pessoa;