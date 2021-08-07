// const rl = require('./interface')

// rl.question('Você está gostando de POO?', resposta => {
//     console.log(`Sua resposta foi ${resposta}`)
//     rl.close();
// })

const options = require('./data'); // Pedra, papel, tesoura;
const User = require('./controller/class/user')
// const MachineOptions = require('./controller/class/machine'); // classe que sorteia
// let sorteio = new MachineOptions({opt: options}).sort()

let usuario = new User({
    opt: options,
    name: 'Maria',
    selected: 'Papel'
}).game()

console.log(usuario)
