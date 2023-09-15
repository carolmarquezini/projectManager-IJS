const { Usuario } = require('./usuario')

describe("Verificar Usuário", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        //let user = new User(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => new Usuario('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let usuario = new Usuario(1,'Carol', 123456, 9999999, '@gmail');
        expect(() => usuario).not.toThrow()
    } )
})
