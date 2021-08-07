class Person {
    constructor(name, occupation){
        this._name = name;
        this._occupation = occupation;
    }

    speak(){
        return `${this.name} trabalha como ${this._occupation}`
    }

    set name(string){
        this._name = string.toUpperCase()
    }

    get name(){
        return this._name
    }
}

let mari = new Person('Mari-L', 'Dev')
mari.name = "mariEnEia"
// mari._occupation = "Advocate"

module.exports = mari;