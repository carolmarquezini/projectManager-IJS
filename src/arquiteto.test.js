const {  Arquiteto } = require('./arquiteto')

describe("Verificar Arquiteto(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        expect(() => new Arquiteto('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let architect = new Arquiteto(1,'Carol', 123456, 9999999, '@gmail', 202320);
        expect(() => architect).not.toThrow()
    } )
})
