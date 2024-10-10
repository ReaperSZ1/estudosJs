// let read = require('readline-sync')
// let cont = -1
// let ArrayNumbers = []

// console.log('Bem vindo a calculadora de soma infinita!')
// console.log('Para terminar pressione Enter')

// do {
//     cont++
//     ArrayNumbers.push(Number(read.question(`${cont + 1} Valor: `) ))
// } while(ArrayNumbers[cont] != '')

// let soma = 0
// for(v of ArrayNumbers){ soma += v }

// console.log('resultado: ' + soma)
 
// ==================================== OU ========================================= 

const read = require('readline-sync');
let soma = 0, cont = 1, valor;

console.log('Bem vindo a calculadora de soma infinita! \n Para terminar pressione Enter');

while(true) { // roda pra sempre
    valor = read.question(`${cont++} Valor: `) // 1 Valor:
    if (valor === '') break; // se digitar enter ele para
    soma += Number(valor);
}

console.log('Resultado: ' + soma);

// node Js/calculadora_infinita  
      
   
