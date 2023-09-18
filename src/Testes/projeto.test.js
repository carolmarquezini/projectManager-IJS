const { Projeto } = require('../Classes/projeto')
const { Engenheiro } = require('../Classes/engenheiro');
const { Arquiteto } = require('../Classes/arquiteto')

let arquiteto = new Arquiteto(1, 'Carol', 123456, 9999999, '@gmail', 202320);
let engenheiro = new Engenheiro(1, 'Carol', 123456, 9999999, '@gmail', 202320);

const projeto = new Projeto(1, engenheiro, arquiteto, 'Endereço Antigo', 'Empreiteiro Antigo');


describe("Verificar Engenheiro(a)", () => {
    it("Retornar inválido caso não seja passado o(a) responsável técnico(a)", () => {
        expect(() => new Projeto(1, null, 'ipiranga', 'nao aplicavel')).toThrow("Informe um responsável técnico válido!");
    });

    it("Retornar válido quando todos atribudos obrigatório do construtor são passados", () => {
        expect(() => projeto).not.toThrow()
    })
})

describe("Teste do Setter de endereço", () => {
    it("Deve definir um novo endereço corretamente", () => {
        const novoEndereco = "Novo Endereço";
        projeto.enderecoObra = novoEndereco;
        expect(projeto.enderecoObra).toBe(novoEndereco);
    })
})

describe("Teste do Setter de empreiteiro ", () => {
    it(" Deve definir um novo empreiteiro corretamente ", () => {
        const novoEmpreiteiro = "Novo empreiteiro";
        projeto.empreiteiroObra = novoEmpreiteiro;
        expect(projeto.empreiteiroObra).toBe(novoEmpreiteiro)
    })
})

describe("Teste do Setter de Status ", () => {
    it(" Deve definir um novo status da obra corretamente ", () => {
        const novoStatus = "em andamento";
        projeto.status = novoStatus;
        expect(projeto.status).toBe(novoStatus)
    })
})

describe('Teste do funções da propriedade de manutenções', () => {
    it('Deve adicionar uma nova manutenção à lista de manutenções', () => {

        const dataManutencao = '2023-09-13';
        const servicoManutencao = 'Reparo na estrutura';

        projeto.addManutencao(dataManutencao, servicoManutencao);

        const listaDeManutencoes = projeto.listaDeManutencoes;

        expect(listaDeManutencoes.length).toBe(1);
        expect(listaDeManutencoes[0]).toEqual({ data: dataManutencao, servico: servicoManutencao });
    });

    it('Deve retornar a última manutenção', () => {
        const dataManutencao = '2023-09-13';
        const servicoManutencao = 'Reparo na estrutura.';

        const dataManutencao2 = '2023-09-15';
        const servicoManutencao2 = 'Arrumando a descarga.';

        projeto.addManutencao(dataManutencao, servicoManutencao);
        projeto.addManutencao(dataManutencao2, servicoManutencao2);

        expect(projeto.ultimaManutencao()).toEqual({ data: dataManutencao2, servico: servicoManutencao2 });

    })

    it('Última manutenção deve retornar nulo quando não tiver manutenções', () => {
        projeto.listaDeManutencoes = null
        expect(projeto.ultimaManutencao()).toBe(null)
    })

});

describe('Teste do funções da propriedade de caracteristica de um projeto ecológico', () => {
    it('Deve adicionar uma nova caracteristica à lista.', () => {

        projeto.addCaracteristicasEco('caracteristica 1')

        expect(projeto.listaDeCaracteristicasEco.length).toBe(1);
        expect(projeto.listaDeCaracteristicasEco[0]).toEqual('caracteristica 1');
    });

    it('Deve retornar projeto ecológico `false` quando a lista estiver vazia', () => {
        projeto.listaDeCaracteristicasEco = null;
        expect(projeto.projetoEcologico()).toBe(false);
    })

    it('Deve retornar projeto ecológico `true` quando atender 4 caracteristicas', () => {

        projeto.addCaracteristicasEco('MATERIAIS SUSTENTAVEIS')
        projeto.addCaracteristicasEco('ENERGIA RENOVAVEL')
        projeto.addCaracteristicasEco('USO EFICIENTE DE AGUA')
        projeto.addCaracteristicasEco('NÃO ECOLÓGICO')

        expect(projeto.projetoEcologico()).toBe(false);

        projeto.addCaracteristicasEco('MATERIAIS SUSTENTAVEIS')

        expect(projeto.projetoEcologico()).toBe(true);
    })

});
