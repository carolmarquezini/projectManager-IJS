const { User } = require('./user')

describe("Verificar Usuário", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        let user = new User('Carol', 0102030405, 99999999)

        expect(user).toThrow("Dados inválidos")

    })

})
