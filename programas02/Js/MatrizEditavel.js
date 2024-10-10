const verif = (valor) => {
    if(isNaN(valor) || valor < 1){
        console.clear()
        console.log("Você digitou errado! Tente novamente \n")
        return true
    } else {
        return false
    }
}
console.clear() // refatore o código

const r = require('readline-sync')

let escolha = 0, tamanho = 0 // usuario
let linha, coluna, aux = 1 // contadores
let ArrayMatriz = []

do { tamanho = parseInt(r.question('digite o tamanho da matriz: ')) } while(verif(tamanho)) 
tamanho-- // L 35. para que linha e coluna funcione corretamente é necessário diminuir o tamanho em 1

let conteudo = r.question('digite o conteudo da matriz: ')
do { 
    console.log("[1]Mostrar a matriz inteira")
    console.log("[2]Mostrar a diagonal da matriz")
    console.log("[3]Mostrar o triangulo superior")
    console.log("[4]Mostrar o triangulo inferior")
    console.log("[5]sair \n")

    escolha = parseInt(r.question("Escolha uma opcao: ")) 
} while(verif(escolha))

switch (escolha) {
    // Matriz inteira
    case 1: 
        for (linha = 0; linha <= tamanho; linha++) {
            ArrayMatriz[linha] = [];
            for (coluna = 0; coluna <= tamanho; coluna++) {
                ArrayMatriz[linha][coluna] = conteudo;
            }
        } // notação Big O(n^2)
        ArrayMatriz.map((el) => console.log(el));
        console.log(ArrayMatriz); // [ [ '1', '1' ], [ '1', '1' ] ]
    break;

    // Diagonal
    case 2:
        for (linha = 0; linha <= tamanho; linha++) {
            ArrayMatriz[linha] = [];
            for (coluna = 0; coluna <= tamanho; coluna++) {
                if (coluna > linha) {
                    ArrayMatriz[linha][coluna] = " ";
                } else {
                    ArrayMatriz[linha][coluna] = conteudo;
                }
            }
        }
        ArrayMatriz.map((el) => console.log(el));
    break;

    // Triângulo superior
    case 3: 
        for (linha = 0; linha <= tamanho; linha++) {
            ArrayMatriz[linha] = [];
            for (coluna = 0; coluna <= tamanho; coluna++) {
                if (linha == 0) { // Primeira linha
                    ArrayMatriz[linha][coluna] = conteudo;
                } else {
                    if (coluna == (ArrayMatriz[linha - 1].length - aux)) {
                        ArrayMatriz[linha][coluna] = " ";
                        aux++;
                    } else {
                        if (ArrayMatriz[linha][coluna - 1] == " ") {
                            ArrayMatriz[linha][coluna] = " ";
                        } else {
                            ArrayMatriz[linha][coluna] = conteudo;
                        }
                    }
                }
            }
        }
        ArrayMatriz.map((el) => console.log(el));
    break;

    // Triângulo inferior
    case 4: 
        for (linha = 0; linha <= tamanho; linha++) {
            ArrayMatriz[linha] = [];
            for (coluna = 0; coluna <= tamanho; coluna++) {
                if (linha == 0) { // Primeira linha
                    ArrayMatriz[linha][coluna] = " ";
                    if (coluna == (tamanho)) {
                        ArrayMatriz[linha][coluna] = conteudo;
                    }
                } else {
                    if (coluna == (ArrayMatriz[linha - 1].length - aux - 1)) {
                        ArrayMatriz[linha][coluna] = conteudo;
                        aux++;
                    } else {
                        if (ArrayMatriz[linha][coluna - 1] == conteudo) {
                            ArrayMatriz[linha][coluna] = conteudo;
                        } else {
                            ArrayMatriz[linha][coluna] = " ";
                        }
                    }
                }
            }
        }
        ArrayMatriz.map((el) => console.log(el));
    break;

    // caso nada funcione
    default:
        console.log("Programa Encerrado");
}
    
// node Js/MatrizEditavel
/* método map
const read = require('readline-sync')
console.log('vou dobrar seus números para sair digite Enter')
const valores = [];
let n = -1
do{
    n++
    valores[n] = Number(read.question(`${n + 1} Valor: `) )
}while(valores[n] != '')
const doubled = valores.map(num => num * 2);
    doubled.splice(valores.length - 1, 1);
console.log('Resultado: ' + doubled)
*/
/* função geradora
function* contador(){
    let i = 0
    while(true){ //infinito
        yield ++i // pré incremento: 1
        if (i > 4) { break }
    }
}
const itc = contador() // itc se torna um ArrayMatriz
for( let c of itc ){ console.log(c) } // 1, 2, 3, 4, 5
*/
