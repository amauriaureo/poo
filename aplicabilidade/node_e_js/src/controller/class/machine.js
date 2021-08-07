class MachineOptions{
    constructor({opt}){
        this._opt = opt;
    }

    sort(){
        const sortOpt = Math.floor(Math.random() * 3 - 0)
        // return sortOpt
        return this.opt[sortOpt].name
    }

    set opt(string){
        this._opt = string;
    }
    get opt(){
        return this._opt;
    }
}

module.exports = MachineOptions;