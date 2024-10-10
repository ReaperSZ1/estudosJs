class Pessoa{  // sempre se inicia com letra maiuscula
    
    //criando um contador de pessoas, ou seja conta quantas instancias foram criadas
    static totalPessoas = 0 // o static é o atributo global de todas as instancias que pertence a classe pessoa

    // o construtor é um metodo especifico para criação de atributos
    constructor (nome, idade){ 
        this._nome = nome // atributos = variavel
        this._idade = idade // sempre use o this
        Pessoa.totalPessoas += 1 // acessando o atributo pai e atualizando seu valor
    }
    
    // é possivel pegar uma informação de um atributo especifico usando o get
    get nome(){ 
        return this._nome
    }
    get idade(){
        return this._idade
    }
    get totalPessoas(){
        return this.totalPessoas
    }

    // é possivel alterar valores de um atributo usando o set
    set nome(NomeValor){ 
         this._nome = NomeValor
    }
    set idade(IdadeValor){
         this._idade = IdadeValor
    }
}
let pessoa1 = new Pessoa('gab', 12) // ele esta instanciando a classe pessoa e colocando valores no metodo construtor
let pessoa2 = new Pessoa('bafg', 21) // esse new serve para criar uma copia da class pessoa com valores especificos == instanciar
console.log('total de pessoas: ' + Pessoa.totalPessoas) // total de pessoas: 2
 
console.log(pessoa1, pessoa2) // Pessoa { _nome: 'gab', _idade: 12 } Pessoa { _nome: 'bafg', _idade: 21 }
console.log(pessoa1.nome + ',', pessoa2.idade) // usando o get // gab, 21

//setando valores(atualizando)
pessoa1.nome = 'jooj'
pessoa2.idade = 32
console.log(pessoa1.nome + ',', pessoa2.idade) // jooj, 32

// prototype
Pessoa.prototype.vidas = 3 // cria um atributo dentro do constructor de Pessoa
console.log(Pessoa.prototype.vidas) // para acessar dentro de pessoa precisa usar prototype
let pessoa3 = new Pessoa('jooj', 4567)
pessoa3.vidas = 2
console.log(pessoa3.vidas) // 2
// criando um metodo
Pessoa.prototype.disparar = function(){ 
    this.vidas--
}
pessoa3.disparar() // vidas --
console.log(pessoa3.vidas) // 1

// ABSTRACT: ele serve para criar regras para seu Class
class Carro {
    constructor(){
        if(this.constructor === Carro) // caso intancie acuse o erro
            throw new TypeError('é proibido instanciar essa classe') // isso serve para lançar uma mensagem de erro
        if(this.ligar === undefined)
            throw new TypeError('Implemente o metodo ligar')
        if(this.desligar === undefined)
            throw new TypeError('Implemente o metodo desligar')
        this._ligado = false
        this._desligado = true
    }
    ligar(){} // corrige o erro
    desligar(){} // corrige o erro
}
class Carrao extends Carro{
    constructor(){
        super()
    }
}
const jooj = new Carro() // é proibido instanciar essa classe
const car1 = new Carrao() // se não ouver um dos dois metodos ele acusara erro 

