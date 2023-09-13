const { Architect } = require('./architect');
const { Engineer } = require('./engineer');

class Project {
    #id;
    responsavelTecnico;
    endereco;
    empreiteiro;
    status;
    manutencao;

    constructor(id, responsavelTecnico, endereco, empreiteiro, status, manutencao) {
        if (!(responsavelTecnico instanceof Engineer)) {
            throw new Error("Informe um responsável técnico válido!");
        }

        if (!id || !responsavelTecnico || !endereco || !empreiteiro || !status) {
            throw new Error("Dados inválidos!");
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

    get responsavelTecnico() {
        return this.responsavelTecnico;
    }
    
    get endereco() {
        return this.endereco;
    }
    
    set endereco(novoEndereco) {
        return this.endereco = novoEndereco;
    }
    
    get empreiteiro() {
        return this.empreiteiro;
    }
    
    set empreiteiro(nome) {
        return this.empreiteiro = nome;
    }
    
    get status() {
        return this.status;
    }
    
    set status(novoStatus) {
        return this.status = novoStatus;
    }
}

module.exports = {
    Project
}