const r = require('readline-sync')

let n = []

console.log('calculador de média das notas')

const média = (a, b) => (a + b) / 2 // arrow function retornando o calculo

do {
    n[0] = r.question('Digite a primeira nota: ')
    n[1] = r.question('Digite a segunda nota: ')

    if(n[0] == '' || n[1] == ''){ console.log('Oops! Voce deixou um campo em branco. Tente novamente!') }
}while(n[0] == '' || n[1] == '')


n[0] = Number(n[0])
n[1] = Number(n[1])

const media = média(n[0], n[1])
console.log(`a média do aluno é: ${media.toFixed(1)}`)

const situacao = (média) => (média >= 6)? 'APROVADO' : (média >= 5) ? 'RECUPERACAO' : 'REPROVADO'
console.log(`e a sua situacao atual esta como: ${situacao(media)}`)
/* 
) Melhore o exercício 96, criando além da função Media() uma outra função 
chamada Situacao(), que vai retornar para o programa principal se o aluno está 
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como 
parâmetro o resultado retornado pela função Media()
*/