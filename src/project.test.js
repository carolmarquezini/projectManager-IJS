const { Project } = require('./project')
const { Engineer } = require('./engineer');
const { Architect } = require('./architect')

let architect = new Architect(1,'Carol', 123456, 9999999, '@gmail', 202320);
let engineer = new Engineer(1,'Carol', 123456, 9999999, '@gmail', 202320);




describe("Verificar Engenheiro(a)", () => {
    // it("Retornar inválido caso não seja passado os atributos do construtor", () => {
    //     //let user = new User(1,'Carol', 123456, 9999999, '@gmail');
    //     expect(() => new Project(1, engineer, 'ipiranga', 'xxxxx', 'iniciando','nao aplicavel')
    // })

    it("Retornar válido quando todos atribudos do construtor são passados", () => {
        let project = new Project(1, engineer, 'ipiranga', 'xxxxx', 'iniciando','nao aplicavel');
        expect(() => project).not.toThrow()
    } )
})