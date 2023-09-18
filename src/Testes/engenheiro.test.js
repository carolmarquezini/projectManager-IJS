const { Engenheiro } = require('../Classes/engenheiro')

describe("Verificar Engenheiro(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        expect(() => new Engenheiro('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let engenheiro = new Engenheiro(1, 'Carol', 123456, 9999999, '@gmail', 202320);

        expect(() => engenheiro).not.toThrow()
    })

    it("Deve definir corretamente os atribudos que são passados no construtor.", () => {
        let engenheiro = new Engenheiro(1, 'Carol', 123456, 9999999, '@gmail.com', 202320);

        expect(engenheiro.id).toBe(1);
        expect(engenheiro.nome).toBe('Carol');
        expect(engenheiro.telefone).toBe(9999999);
        expect(engenheiro.email).toBe('@gmail.com');
        expect(engenheiro.crea).toBe(202320);
    })
})

let engenheiro = new Engenheiro(1, 'Carol', 123456, 9999999, '@gmail', 202320);
engenheiro.exibirDados()
