const r = require('readline-sync')

let mais_velha = 0, mais_jovem = 0 , media_idade = 0, qntd_homens_30 = 0, qntd_mulheres_18 = 0
let idade = [], sexo = [], menor_idade_mulher = []
let nome = ['', ''] //gambiarra alert
let cadastrar = ''
let i = -1 // gambiarra alert

function verif_types (posicao){ // verifica se é numero ou texto
    if(posicao == 1)
        if(!isNaN(nome[i])){ // deve ser string, verifique se isso é um number se for execute
            console.clear()
            console.log('Você digitou errado! Tente novamente')
            return true
        } else {
            return false
        }
    if(posicao == 2)
        if(isNaN(idade[i])){ // deve ser number, verifique se isso é um string se for execute
            console.clear()
            console.log('Você digitou errado! Tente novamente')
            return true
        } else {
            return false
        }
    if(posicao == 3) 
        if( !isNaN(sexo[i])){
            console.clear()
            console.log('Você digitou errado! Tente novamente')
            return true
        } else {
            return false 
        }
}

do{
    console.clear() // limpa a tela
    
    i++ // gambiarra alert
    
    do { nome[i] = r.question('digite o nome da pessoa: ') } while(verif_types(1))
    do { idade[i] = r.question('digite a idade da pessoa: ') } while(verif_types(2))
    do { sexo[i] = r.question('digite o sexo da pessoa (M/F):') } while(verif_types(3))
    
    idade[i] = Number(idade[i])
    media_idade += idade[i]

    cadastrar = r.question('voce deseja cadastrar outra pessoa? (S/N): ')
} while (cadastrar.toUpperCase() != 'N')

    

for (let n = 0; n <= i; n++) {
    if(sexo[n].toUpperCase() == 'F' && idade[n] < 18) {qntd_mulheres_18++}
    if(sexo[n].toUpperCase() == 'M' && idade[n] > 30) {qntd_homens_30++}

    if(idade[n] == Math.max(...idade)) {mais_velha = nome[n]}

    if(sexo[n].toUpperCase() == 'F') {  // gambiarra alert
        menor_idade_mulher[n] = idade[n]
        if(idade[n] == Math.min(...menor_idade_mulher))
            mais_jovem = nome[n]
    }

}
console.clear()

console.log(`o nome da pessoa mais velha é: ${mais_velha} com ${Math.max(...idade)} anos de idade`)
console.log('a média da idade do grupo é: ' + (media_idade / (i + 1)))

if(mais_jovem) // verifica se existe mulheres 
    console.log(`o nome da mulher mais nova é: ${mais_jovem} com ${Math.min(...menor_idade_mulher)} anos de idade`)
if(qntd_mulheres_18)
    console.log('a quantidade de mulheres com menos de 18 anos é: ' + qntd_mulheres_18)
if(qntd_homens_30) 
    console.log('a quantidade de homens com mais de 30 anos é: ' + qntd_homens_30)

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