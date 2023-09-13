const { User } = require('./user')

describe("Verificar Usuário", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        //let user = new User(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => new User('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let user = new User(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => user).not.toThrow()
    } )
})
