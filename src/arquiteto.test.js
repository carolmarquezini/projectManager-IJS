const { Arquiteto } = require('./arquiteto')

describe("Verificar Arquiteto(a)", () => {
    it("Retornar inválido caso não seja passado os atributos do construtor", () => {
        expect(() => new Arquiteto('Carol', 123456, 9999999, '@gmail')).toThrow("Dados inválidos!")
    })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let arquiteto = new Arquiteto(1, 'Carol', 123456, 9999999, '@gmail', 202320);
        expect(() => arquiteto).not.toThrow()
    })

    it("Deve definir corretamente os atribudos que são passados no construtor.", () => {
        let arquiteto = new Arquiteto(1, 'Carol', 123456, 9999999, '@gmail.com', 202320);
        expect(arquiteto.id).toBe(1);
        expect(arquiteto.nome).toBe('Carol');
        expect(arquiteto.telefone).toBe(9999999);
        expect(arquiteto.email).toBe('@gmail.com');
        expect(arquiteto.cau).toBe(202320);
    } )
})
