const { User } = require('./user');

class Architect extends User {
    cau;

    constructor(id, name, cpf, contact, email, cau) {
        super(id, name, cpf, contact, email)
        if(!id || !name || !cpf || !contact || !email || !cau) {
            throw new Error ("Dados inválidos!");
        }
        this.cau = cau;
    }

}

module.exports = {
    Architect
}