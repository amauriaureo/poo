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

// Sobre este método abaixo (NewPerson) - não é recomendado.
// Era feito dessa forma antes do javascript dar suporte às classes
// É preferível trabalhar no formato de classe.
function NewPerson(name) {
    this._name = name;
}
const SegundaPessoa = new NewPerson('Maricotinha')

const Pessoa = new Person;

// module.exports = Pessoa;
module.exports = SegundaPessoa;