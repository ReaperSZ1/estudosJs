function contar(){
    let incremento = document.querySelector('#incremento')
    let inicio = document.querySelector('#inicio')
    let erro = document.querySelector('#erro')
    let msg = document.querySelector('#msg')
    let fim = document.querySelector('#fim')
    
    erro.innerHTML = ''
    msg.innerHTML = ``
    
    incremento = Number(incremento.value)
    inicio = Number(inicio.value)
    fim = Number(fim.value)

    if(incremento == 0) { 
        erro.innerHTML = '[ERROR] o incremento não pode ser <strong>ZERO</strong> </br> Tente novamente!'
    } else if(inicio > fim && incremento > 0 || inicio < fim && incremento < 0) {
        erro.innerHTML = '[ERROR] Troque o sinal do <strong>incremento</strong> e tente novamente!'
    } else if(inicio <= fim) {
        while(inicio <= (fim - 1)) { // contagem crescente
            let seta = (inicio + incremento > fim) ? '' : `\u{1F449}`
            msg.innerHTML += `${inicio} ${seta} `
            inicio += incremento
        }
            msg.innerHTML += (inicio > fim) ? 'FIM.':  `${inicio} \u{1F3C1}`;
    } else {
        while(inicio >= (fim + 1) ) { // contagem decrescente
            let seta = ( inicio - incremento < fim) ? '' : `\u{1F449}`
            msg.innerHTML += `${inicio} ${seta} `
            inicio += incremento
        }
            msg.innerHTML += (inicio < fim) ? 'FIM.':  `${inicio} \u{1F3C1}`;
    }
}