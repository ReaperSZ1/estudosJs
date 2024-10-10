
function verificar(){
    const sex = document.getElementsByName('radsex')
    const fano = document.querySelector('#ano')
    const msg = document.querySelector('#msg')
    const img = document.createElement('img') //img.setAttribute('id', ' foto') 

    const data = new Date()
    const ano = data.getFullYear()

    const idade = ano - Number(fano.value)
    
    let genero = ''

    if (fano.value.length <= 3 || fano.value > ano) {
        alert('[ERRO] Verifique Seu Ano de Nascimento novamente!')
    } else {
        if (sex[0].checked) { 
            genero = 'Homem' 
            if (idade < 10) { img.setAttribute('src', ' menino.png') }
            else if (idade < 21) { img.setAttribute('src', ' garoto jovem.png') }
            else if (idade < 50) { img.setAttribute('src', ' homem adulto.png') } 
                            else { img.setAttribute('src', ' homem idoso.png') }
        }
        if (sex[1].checked) { 
            genero = 'Mulher' 
            if (idade < 10) { img.setAttribute('src', ' menina.png') }
            else if (idade < 21) { img.setAttribute('src', ' garota jovem.png') }
            else if (idade < 50) { img.setAttribute('src', ' mulher adulta.png') } 
                            else { img.setAttribute('src', ' mulher idosa.png') }  
        } 
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        msg.appendChild(img)
    }
    
}
