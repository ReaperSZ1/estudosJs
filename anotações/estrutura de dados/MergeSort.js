"use strict"

let Arr = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10];
Arr.sort((a, b) => a - b);  // Ordena o array
let encontre = Math.floor(Math.random() * 10) + 1;

let inicio = 0;
let fim = Arr.length - 1; // 9
let i = 0

// dividir para conquistar
while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);  // Calcula o meio a cada iteração

    if (Arr[meio] === encontre) {
        console.log('Você encontrou!');
        break;
    } else if (Arr[meio] < encontre) {
        inicio = meio + 1;  // Continua na metade direita
    } else {
        fim = meio - 1;  // Continua na metade esquerda
    }
    console.log(++i);
} // Big O(Log n)

   