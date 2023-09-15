class Usuario {

    #id;
    nome;
    cpf;
    telefone;
    email;

    constructor(id, nome, cpf, telefone, email) {
        if(!id || !nome || !cpf || !telefone || !email ) {
            throw new Error ("Dados inválidos!");
        }
        this.#id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }

    get id() {
        return this.#id;
    }

    get cpf() {
        return this.cpf;
    }

    get contato() {
        return this.telefone;
    }

    get email() {
        return this.email;
    }

}

module.exports = {
    Usuario
}