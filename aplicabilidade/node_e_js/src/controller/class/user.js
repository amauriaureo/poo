const MachineOptions = require('./machine')

class User extends MachineOptions {
    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }

    set name(string){
        this._name = string;
    }
    get name(){
        return this._name;
    }

    set selected(string){
        this._selected = string;
    }
    get selected(){
        return this.selected;
    }

    logic(){
        if (this._selected === this._sort){
            return `${this._name}, você empatou! - usuario: ${this._selected} | maquina: ${this._sort}`
        } else if ((this._selected === 'Pedra' && this._sort === 'Tesoura') || (this._selected === 'Tesoura' && this._sort === 'Papel') || (this._selected === 'Papel' && this._sort === 'Pedra') ) {
            return `${this._name}, Joia! Voce venceu. usuario: ${this._selected} | maquina: ${this._sort}`
        } else {
            return `${this._name}, A maquina esta aprendendo. usuario: ${this._selected} | maquina: ${this._sort}`
        }
    }

    game(){
        return this.logic()
    }

}

module.exports = User;