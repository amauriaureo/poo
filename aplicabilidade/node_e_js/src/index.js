// const rl = require('./interface')

// rl.question('Você está gostando de POO?', resposta => {
//     console.log(`Sua resposta foi ${resposta}`)
//     rl.close();
// })

const options = require('./data');
const MachineOptions = require('./controller/class');

let sorteio = new MachineOptions({opt: options}).sort()

console.log(sorteio)
