const r = require('readline-sync')

let mais_velha = 0, mais_jovem = 0 , media_idade = 0, qntd_homens_30 = 0, qntd_mulheres_18 = 0
let idade = 0, sexo = '', nome = ''
let cadastrar = ''
let i = 0
let pessoas = []

function verif_types (posicao, valor){ // verifica se é numero ou texto
    switch (posicao) {
        case 1: 
            if(!isNaN(valor)){ // deve ser string, verifique se isso é um number se for execute
                console.clear()
                console.log('o Nome da pessoa nao pode conter numeros')
                return true
            } else {
                return false
            }
        break;
        case 2: 
            if(isNaN(valor)){ // deve ser number, verifique se isso é um string se for execute
                console.clear()
                console.log('A idade da pessoa só deve conter numeros')
                return true
            } else {
                return false
            }
        break;
        case 3:
            if(valor == 'm' || valor == 'f'){
                return false 
            } else {
                console.clear()
                console.log(String(valor))
                console.log('digite Somente M ou F')
                return true
            }
        break;    
    }
}

do{
    console.clear() // limpa a tela
    do { nome = r.question('digite o nome da pessoa: ') } while(verif_types(1, nome))
    do { idade = r.question('digite a idade da pessoa: ') } while(verif_types(2, idade))
    do { sexo = r.question('digite o sexo da pessoa (M/F):') } while(verif_types(3, sexo))
        
    idade = Number(idade)
    pessoas.push({nome: nome, idade: idade, sexo: sexo})
    console.log(pessoas)
    media_idade += idade
    cadastrar = r.question('voce deseja cadastrar outra pessoa? (S/N): ')
} while (cadastrar.toUpperCase() != 'N')

// busca a menor idade entre as mulheres
let mulherMaisJovem = pessoas
    .filter(pessoa => pessoa.sexo === "F") // cria um novo array contendo as mulheres
    .reduce((maisJovem, atual) => (atual.idade < maisJovem.idade ? atual : maisJovem)) // no array do filter verifica qual é a mais jovem
// Encontrar a mulheres com a idades maiores que 18 anos
let mulheresMaioresQue18 = pessoas
    .filter(pessoa => pessoa.sexo === "F") 
    .filter(mulher => mulher.idade >= 18)
// quantidade de homens maiores que 30 anos
let homensMaioresQue30 = pessoas
    .filter(pessoa => pessoa.sexo === "M") 
    .filter(mulher => mulher.idade >= 30)    
// armazena a idade mais alta da lista
let pessoMaisVelha = pessoas
    .reduce((maisVelho, atual) => (atual.idade > maisVelho.idade ? atual : maisVelho)) 
pessoas.forEach((el) => media_idade += el.idade) 
console.clear()

console.log(`o nome da pessoa mais velha é: ${pessoMaisVelha.nome} com ${pessoMaisVelha.idade} anos de idade`)
console.log('a média da idade do grupo é: ' + (media_idade / pessoas.length))

if(mais_jovem) // verifica se existe mulheres 
    console.log(`o nome da mulher mais nova é: ${mulherMaisJovem.nome} com ${mulherMaisJovem.idade} anos de idade`)
if(mulheresMaioresQue18)
    console.log('a quantidade de mulheres com menos de 18 anos é: ' + mulheresMaioresQue18)
if(homensMaioresQue30) 
    console.log('a quantidade de homens com mais de 30 anos é: ' + homensMaioresQue30)

// node leitor de dados
/* 
Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. 
O programa vai perguntar se o usuário quer ou não cadastrar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos
*/ // missão cumprida com exito gambiarra