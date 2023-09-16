const { Arquiteto } = require('./arquiteto');
const { Engenheiro } = require('./engenheiro');

class Projeto {
    #id;
    #engenheiroResponsavel;
    #arquitetoResponsavel;
    enderecoObra;
    empreiteiroObra;
    status;
    listaDeCaracteristicasEco = [];
    listaDeManutencoes = [];
    #requisitosEcologicos = ['USO EFICIENTE DE AGUA', 'BANHEIRO SECO',
        'ENERGIA RENOVAVEL', 'MATERIAIS SUSTENTAVEIS', 'TRATAMENTO DE EFLUENTES',
        'ACESSIBILIDADE', 'MANUTENCAO ADEQUADA', 'ELIMINACAO ADEQUADA DE RESIDUOS'];

    constructor(id, engenheiroResponsavel, arquitetoResponsavel, enderecoObra, empreiteiroObra, status) {
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
        this.listaDeCaracteristicasEco = [];
        this.listaDeManutencoes = [];
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

    addCaracteristicasEco(caracteristicasEco) {
        if (this.listaDeCaracteristicasEco == null) {
            this.listaDeCaracteristicasEco = [];
        }

        this.listaDeCaracteristicasEco.push(caracteristicasEco)
    }

    projetoEcologico() {
        let qtdRequisitoAtendido = 0;

        if (this.listaDeCaracteristicasEco == null) {
            return false;
        }

        this.listaDeCaracteristicasEco.forEach(element => {
            if (this.#requisitosEcologicos.includes(element.toUpperCase())) {
                qtdRequisitoAtendido++;
            }
        });

        if (qtdRequisitoAtendido >= 4) {
            return true
        }

        return false
    }

    addManutencao(data, servico) {
        if (this.listaDeManutencoes == null) {
            this.listaDeManutencoes = [];
        }

        const manutencao = { data, servico };
        this.listaDeManutencoes.push(manutencao);
    }

    todasManutencoes() {
        return this.listaDeManutencoes;
    }

    ultimaManutencao() {
        if (this.listaDeManutencoes == null || this.listaDeManutencoes.length == 0) {
            return null
        }
        return this.listaDeManutencoes[this.listaDeManutencoes.length - 1]
    }

}

module.exports = {
    Projeto
}
