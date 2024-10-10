const caixaTxt = document.querySelector('#input')
const operadores = ['*', '/', '+', '-']
let jooj = 0

const del = () => caixaTxt.value = caixaTxt.value.slice(0, -1) // deleta um por um

const delAll = () => caixaTxt.value = '' // deleta tudo

function input(valor){
    // verifica e transforma os valores
    let currentValue = (valor.innerText == 'X')? '*': (valor.innerText == ',')? '.' : valor.innerText 

    if(caixaTxt.value.includes('.') && currentValue == '.') // verifica se tem o . em input
        caixaTxt.value += '' 
    else 
        if(operadores.includes(currentValue) && operadores.includes(jooj[jooj.length - 1])) // verifica se operadores se repetem
            caixaTxt.value += ''
        else 
            if(!(jooj = 0 && operadores.includes(currentValue))) // verifica se o primeiro valor é um operador
                caixaTxt.value += currentValue
        
        jooj = caixaTxt.value.split('') //  transforma string em array    
}
function igual(){
    let calculo = math.evaluate(caixaTxt.value) // pega o valor transforma em string como é ua operação ele calcula  
    caixaTxt.value = calculo 
}


