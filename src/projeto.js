const { Arquiteto } = require('./arquiteto');
const { Engenheiro } = require('./engenheiro');

class Projeto {
    #id;
    #engenheiroResponsavel;
    #arquitetoResponsavel;
    enderecoObra;
    empreiteiroObra;
    status;
    listaDeManutencoes = [];

    constructor(id, engenheiroResponsavel, arquitetoResponsavel, enderecoObra, empreiteiroObra, status, listaDeManutencao) {
        if (!(engenheiroResponsavel instanceof Engenheiro)) {
            throw new Error("Informe um responsável técnico válido!");
        }

        if (!(arquitetoResponsavel instanceof Arquiteto)) {
            throw new Error("Informe um responsável técnico válido!");
        }

        if (!id || !engenheiroResponsavel || !enderecoObra) {
            throw new Error("Dados inválidos!");
        }
        this.#id = id;
        this.#engenheiroResponsavel = engenheiroResponsavel;
        this.#arquitetoResponsavel = arquitetoResponsavel;
        this.enderecoObra = enderecoObra;
        this.empreiteiroObra = empreiteiroObra;
        this.status = status;
        this.listaDeManutencoes = [];

        if (listaDeManutencao) {
            this.listaDeManutencoes.push(listaDeManutencao)
        }
    }

    get id() {
        return this.#id;
    }

    get engenheiroResponsavel() {
        return this.#engenheiroResponsavel;
    }

    get enderecoObra() {
        return this.enderecoObra;
    }

    set enderecoObra(novoEndereco) {
        return this.enderecoObra = novoEndereco;
    }

    get empreiteiroObra() {
        return this.empreiteiroObra;
    }

    set empreiteiroObra(nome) {
        return this.empreiteiroObra = nome;
    }

    get status() {
        return this.status;
    }

    set status(novoStatus) {
        return this.status = novoStatus;
    }

    addManutencao(data, servico) {

        const manutencao = { data, servico };
        this.listaDeManutencoes.push(manutencao);
    }

    todasManutencoes() {
        return this.listaDeManutencoes;
    }

    ultimaManutencao() {
        if(this.listaDeManutencoes == null || this.listaDeManutencoes.length == 0 ){
            return null
        }
        return this.listaDeManutencoes[this.listaDeManutencoes.length-1]
    }

}

module.exports = {
    Projeto
}
