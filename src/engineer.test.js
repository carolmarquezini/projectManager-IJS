const { Engineer } = require('./engineer')

describe("Verificar Engenheiro(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        //let user = new User(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => new Engineer('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let engineer = new Engineer(1,'Carol', 123456, 9999999, '@gmail', 202320);
        expect(() => engineer).not.toThrow()
    } )
})