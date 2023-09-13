class User {

    #id;
    name;
    cpf;
    contact;
    email;

    constructor(id, name, cpf, contact, email) {
        if(!id || !name || !cpf || !contact || !email ) {
            throw new Error ("Dados inválidos!");
        }
        this.#id = id;
        this.name = name;
        this.cpf = cpf;
        this.contact = contact;
        this.email = email;
    }

    get id() {
        return this.#id;
    }

    get cpf() {
        return this.cpf;
    }

    get contact() {
        return this.contact;
    }

    get email() {
        return this.email;
    }

}

module.exports = {
    User
}