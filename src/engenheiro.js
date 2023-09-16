const { Usuario } = require('./usuario');

class Engenheiro extends Usuario {
    crea;

    constructor(id, nome, cpf, telefone, email, crea) {
        super(id, nome, cpf, telefone, email)
        if(!id || !nome || !cpf || !telefone || !email || !crea) {
            throw new Error ("Dados inválidos!");
        }
        this.crea = crea;
    }

    get cre(){
        return this.crea;
    }

    exibirDados() {
        console.log(`Id Engenheiro: ${this.id}`);
        console.log(`Nome Engenheiro: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`CREA: ${this.crea}`);
        console.log(`e-mail: ${this.email}`);        
      }

}



module.exports = {
    Engenheiro
}

