const div = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const nome = document.querySelector('#nome')
const portas = document.querySelector('#portas')

let pB = 0, pM = 0
let municao = 0 , blindagem = 0
let divs = 0
let remover = 0
let carros = []

function selecionar(radio1, radio2){ // marcador de radios
    document.querySelector(radio1).checked = true // marca o radio
    document.querySelector(radio2).checked = false // desmarca o outro
    if(radio1 == '#militar'){
        pB = document.createElement('p')
        pB.innerText = 'Blindagem: '

        blindagem = document.createElement('input')
        blindagem.setAttribute('type', 'number')
        pB.appendChild(blindagem)
        div.appendChild(pB)

        pM = document.createElement('p')
        pM.innerText = 'Munição: '

        municao = document.createElement('input')
        municao.setAttribute('type', 'number')
        pM.appendChild(municao)
        div.appendChild(pM)
    } else {
        pB.remove()
        pM.remove()
    }
}
function dadosCarros(){
    carros.forEach((c, indice) => { // esse foreach abre o ultimo objeto criado, no qual torna-o acessivel
        divs = document.createElement('div')
        divs.innerHTML = `Nome: ${c._nome} <br/>`
        divs.innerHTML += `Portas: ${c._portas} <br/>`
        divs.innerHTML += `Munição: ${c._municao} <br/>`
        divs.innerHTML += `Blindagem: ${c._blindagem} <br/>`

        const remover = document.createElement('button')
        remover.innerHTML = 'Deletar'
        divs.appendChild(remover)
        remover.addEventListener("click", () => remover.parentNode.remove()) 

        // esse insert cria esse texto e adiciona ele no fim da div (beforeend)
        divs.insertAdjacentHTML('beforeend', '<br/> ---------------------------------');
    })
    div2.appendChild(divs)
}
function adicionar() {
    if(normal.checked){
        const c = new Carros(nome.value, portas.value)
        carros.push(c)
    } else {
        const c = new Militar(nome.value, portas.value, blindagem.value, municao.value)
        carros.push(c)
    }
    nome.focus()
    dadosCarros()
}
class Carros{
    constructor(nome, portas){
        this._nome = nome
        this._portas = portas
    }
}
class Militar extends Carros{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this._blindagem = blindagem
        this._municao = municao
    }
}
