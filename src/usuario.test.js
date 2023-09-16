const { Usuario } = require('./usuario')

let usuario = new Usuario(1,'Carol', 123456, 9999999, '@gmail');

describe("Verificar Usuário", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        expect(() => new Usuario('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {  
        expect(() => usuario).not.toThrow()
    } )
})

describe("Teste do Setter de telefone ", () => {
    it(" Deve definir um novo número de telefone do usuário", () => {       
        const novoTelefone = 992010102;
        usuario.contato = novoTelefone;
        expect(usuario.telefone).toBe(novoTelefone)
    })
})

describe("Teste do Setter de e-mail ", () => {
    it(" Deve definir um novo e-mail do usuário", () => {      
        const novoEmail = "testeNovo@gmail.com";
        usuario.email = novoEmail;
        expect(usuario.email).toBe(novoEmail)
    })
})