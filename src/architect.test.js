const { Architect } = require('./architect')

describe("Verificar Arquiteto(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        //let user = new User(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => new Architect('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let user = new Architect(1,'Carol', 123456, 9999999, '@gmail', 202320);
        expect(() => user).not.toThrow()
    } )
})