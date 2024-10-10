let jooj = ['a', 'e', 'i']

function random(){
    return 'ai'
}

export {jooj, random} // pode exportar quantos valores quiser OBS: funções vao sem ()

// ezportar como padrao OBS só pode uma vez por código
export default function ramdom2(){
    return 'jooj'
}

import {abc} from './z.mjs' // importar todo tipo de dado de um arquivo
console.log(abc); // saida: 0

import {numeros as nums} from './z.mjs'  // voce pode mudar o nome do valor usando o as
console.log(nums); // saida; [1, 2]

import * as valores from './z.mjs' // importa todos os valores em forma de objeto e da um nome a esse obj
console.log(valores.abc)  // saida: 0
console.log(valores.numeros);  // saida; [1, 2]



