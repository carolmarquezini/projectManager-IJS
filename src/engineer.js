const { User } = require('./user');

class Engineer extends User {
    crea;

    constructor(id, name, cpf, contact, email, crea) {
        super(id, name, cpf, contact, email)
        if(!id || !name || !cpf || !contact || !email || !crea) {
            throw new Error ("Dados inválidos!");
        }
        this.crea = crea;
    }

}

module.exports = {
    Engineer
}