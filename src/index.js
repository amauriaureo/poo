const ObjJavascript = require('./literals/objeto') // arquivo principal é js então não preciso avisar que esse é js.
const ObjJSON = require('./literals/objeto.json')

console.log(ObjJavascript.name)
console.log(ObjJavascript.getDiscount())
console.log(ObjJavascript.getFinalPrice())


console.log(ObjJSON.produto[1].name)