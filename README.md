## GERENCIADOR DE PROJETOS DE BANHEIROS ECOLÓGICOS ♻️

**Descrição do projeto**

O Gerenciador de Banheiros Ecológicos é um projeto desenvolvido como parte de um curso de programação em JavaScript, que abrange os princípios de Programação Orientada a Objetos (POO), teste de código e boas práticas de desenvolvimento. O projeto tem um objetivo social fundamental: fornecer acesso a banheiros ecológicos para moradores de rua, melhorando sua qualidade de vida e promovendo a higiene pessoal.

---
## Documentação 📄

- [Problema](#problema)
- [Solução](#solução)
- [UML](#uml)
- [Funcionalidades](#funcionalidades)
- [Testes](#testes)
- [Tecnologias](#tecnologias)
  - [Dependências do Desenvolvimento](#dependências-do-desenvolvimento)
- [Instalação](#instalação)
- [Autora](#autora)

---
## Problema 

A grande São Paulo abriga um significativo número de pessoas em situação de rua, cujas necessidades básicas fisiológicas e de higiene muitas vezes são negligenciadas pelo governo. Como resultado, essas pessoas acabam por realizar suas necessidades fisiológicas em espaços públicos ao ar livre, desprovidos de qualquer infraestrutura adequada.

Essa realidade tem impactos profundos, tanto na saúde das pessoas em situação de rua, quanto no meio ambiente circundante. Além disso, essa situação afeta negativamente a estética e a qualidade de vida nas regiões urbanas que abrigam uma considerável população em situação de rua.

---
## Solução

Com base no problema exposto,  

- [x] Criar projeto de instalação de banheiros ecológicos.
- [x] Atualizar projeto de instalação de banheiros ecológicos.
- [x] Manutenção de projetos de instalação de banheiros ecológicos.

Portanto, as soluções selecionadas incluem a criação e manutenção de projetos de instalação de banheiros ecológicos.

---
## UML
![UML-projeto final](https://github.com/carolmarquezini/projetoFinal-Reprograma-JS/assets/100984525/f3a88c5f-8110-4390-9de3-6fa2f2165c3e)


---
## Funcionalidades

## Funcionalidades de Usuários:

A classe `Usuários` representa os usuários do sistema e inclui os principais atributos necessários para criar um usuário. Ela **encapsula** os detalhes dos dados do usuário em um único objeto.

| Função                 | Descrição             | 
| ---------------------- | ----------------------|
| get id()               | Retorna id            |
| get cpf()              | Retorna cpf           |
| get contact()          | Retorna contato       | 
| get email()            | Retorna e-mail        | 
| set email(novoEmail)   | Retorna novo e-mail   | 
| exibirDados()          | exibi todos os dados  | 


## Funcionalidades de Engenheiro:

A classe `Engenheiro` herda da classe `Usuario`, o que representa o conceito de **herança** em POO. Isso permite que a classe Engenheiro compartilhe atributos e métodos comuns com a classe `Usuario`.

```jsx
const { Usuario } = require('./usuario');

class Engenheiro extends Usuario {
    crea;

    constructor(id, nome, cpf, telefone, email, crea) {
        super(id, nome, cpf, telefone, email)
        if (!id || !nome || !cpf || !telefone || !email || !crea) {
            throw new Error("Dados inválidos!");
        }
        this.crea = crea;
    }

    get crea() {
        return this.crea;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`CREA: ${this.crea}`);
    }

}



module.exports = {
    Engenheiro
}
```

## Funcionalidades de Arquiteto:

A classe `Arquiteto` também herda de `Usuário` e, com o uso de `super.exibirDados()`, é possível notar a inclusão do número de CAU do arquiteto, demonstrando assim o Polimorfismo.

```jsx
const { Usuario } = require('./usuario');

class Arquiteto extends Usuario {
    cau;

    constructor(id, nome, cpf, telefone, email, cau) {
        super(id, nome, cpf, telefone, email)
        if (!id || !nome || !cpf || !telefone || !email || !cau) {
            throw new Error("Dados inválidos!");
        }
        this.cau = cau;
    }

    get cau() {
        return this.cau;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`CAU: ${this.cau}`);

    }

}
```

## Funcionalidades de Projetos:

A classe `Projetos` representa o conceito de **composição**, pois ela inclui arquitetos e engenheiros. Possui funcionalidades que auxiliam na determinação se um projeto é ecológico ou não, adicionando características, acompanhando e atualizando manutenções.

**Adicionar Características Ecológicas**
```jsx
    addCaracteristicasEco(caracteristicasEco) {
        if (this.listaDeCaracteristicasEco == null) {
            this.listaDeCaracteristicasEco = [];
        }

        this.listaDeCaracteristicasEco.push(caracteristicasEco)
    }
```
Este método adiciona características ecológicas a um projeto. Se a lista de características ecológicas ainda não existe, ela é inicializada.


**Verificar se um Projeto é Ecológico**

```jsx
    projetoEcologico() {
        let qtdRequisitoAtendido = 0;

        if (this.listaDeCaracteristicasEco == null) {
            return false;
        }

        this.listaDeCaracteristicasEco.forEach(element => {
            if (this.#requisitosEcologicos.includes(element.toUpperCase())) {
                qtdRequisitoAtendido++;
            }
        });

        if (qtdRequisitoAtendido >= 4) {
            return true
        }

        return false
    }

```
Este método verifica se um projeto é ecológico com base nas características ecológicas definidas. Para ser considerado ecológico, o projeto deve atender a pelo menos 4 requisitos ecológicos.


**Adicionar Manutenção**

```jsx
    addManutencao(data, servico) {
        if (this.listaDeManutencoes == null) {
            this.listaDeManutencoes = [];
        }

        const manutencao = { data, servico };
        this.listaDeManutencoes.push(manutencao);
    }
```

```jsx

    todasManutencoes() {
        return this.listaDeManutencoes;
    }
```
Este método retorna uma lista de todas as manutenções registradas para o projeto.


**Última Manutenção**

```jsx
    ultimaManutencao() {
        if (this.listaDeManutencoes == null || this.listaDeManutencoes.length == 0) {
            return null
        }
        return this.listaDeManutencoes[this.listaDeManutencoes.length - 1]
    }

}
```
Este método retorna informações sobre a última manutenção registrada no projeto.

---

## Testes

```jsx

> projetofinal@1.0.0 test
> jest

 PASS  src/usuario.test.js
 PASS  src/engenheiro.test.js
  ● Console

    console.log
      Id: 1
      at Engenheiro.log (src/usuario.js:45:17)
    console.log
      Nome: Carol
      at Engenheiro.log (src/usuario.js:46:17)
    console.log
      CPF: 123456

      at Engenheiro.log (src/usuario.js:47:17)
    console.log
      Telefone: 9999999
      at Engenheiro.log (src/usuario.js:48:17)
    console.log
      e-mail: @gmail
      at Engenheiro.log (src/usuario.js:49:17)
    console.log
      CREA: 202320
      at Engenheiro.log [as exibirDados] (src/engenheiro.js:20:17)

 PASS  src/arquiteto.test.js
 PASS  src/projeto.test.js

Test Suites: 4 passed, 4 total
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        3.109 s
Ran all test suites.

```

---
## Tecnologias

### Dependências do Desenvolvimento
- [Jest](https://www.npmjs.com/package/jest) - Jest é uma estrutura de test js, através dele é possível realizar os testes;
- [Nodemon](https://www.npmjs.com/package/nodemon) - Nodemon ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
- [Supertest](https://www.npmjs.com/package/jest) - SuperTest automatiza a realização dos testes.

---
## Instalação
1. **git clone** - Clonar o projeto: abra o terminal onde deseja criar uma pasta para armazenar este projeto e execute o seguinte comando

    ```bash
    $ mkdir nomePasta
	
	$ cd nomePasta
  
	$ git init
  
	$ git clone https://github.com/carolmarquezini/projetoFinal-Reprograma-JS
    ``` 
    
3. **npm install** - Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
4. **npm run dev** nicie o servidor, utilizando a frase: 

   ```bash
    $ npm run dev
    ```  
---
## Autora

<a href="https://www.linkedin.com/in/carolainemarquezini" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

![FOTO](https://user-images.githubusercontent.com/100984525/181692435-1f6fd859-60cd-4541-b2ad-93b1b842da3a.jpeg)


