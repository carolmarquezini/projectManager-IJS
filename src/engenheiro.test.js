const { Engenheiro } = require('./engenheiro')

describe("Verificar Engenheiro(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        expect(() => new Engenheiro('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let engenheiro = new Engenheiro(1,'Carol', 123456, 9999999, '@gmail', 202320);
        expect(() => engenheiro).not.toThrow()
    } )
})
