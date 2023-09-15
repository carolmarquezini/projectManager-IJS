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

}

module.exports = {
    Engenheiro
}
