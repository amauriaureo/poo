const ObjJavascript = require('./literals/objeto') // arquivo principal é js então não preciso avisar que esse é js.
const ObjJSON = require('./literals/objeto.json')
// const Pessoa = require('./class/anatomia')
const SegundaPessoa = require('./class/anatomia')
const mari = require('./class/gettersAndSetters')

// console.log(ObjJavascript.name)
// console.log(ObjJavascript.getDiscount())
// console.log(ObjJavascript.getFinalPrice())

// console.log(ObjJSON.produto[1].name)
// console.log(Pessoa.hello('Amauri', 'dev', 27))

// console.log(SegundaPessoa._name)

// console.log(mari.speak())
// const Person = require('./class/metodoPublico')

// let jose = new Person("Zé", 38)._name

// ou 
// let jose = new Person({
//     name: "Zé",
//     age: 38
// })._name
// console.log(jose)
const Employee = require('./class/metodoPrivado')

let maria = new Employee({
    name:'Maria',
    age: 39,
    codelanguage: 'JS'
})
maria.stack()
maria.speak()

// console.log(maria)