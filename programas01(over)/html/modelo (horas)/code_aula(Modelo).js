function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')

    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()

    let zero = (data.getMinutes() < 10) ? 0 : ''
    let d = [0, 0, 0]
    
    if (horas >= 0 && horas < 12) {
        img.src = 'manha.png' //img.src serve pra acessar o src dentro de img na div pra fazer alterações
        document.body.style.background = '#ded985'
        d[1]++
    } else if (horas >= 12 && horas < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#e07828'
        d[2]++
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#160757'
        d[3] = 1
    }
    
    let horario_dia = (d[1] == 1) ? 'da manhã' : (d[2] == 1) ? 'da tarde' : (d[3] == 1) ? 'da noite' : ''
    msg.innerHTML = `agora são ${horas}:${zero}${minutos} horas ${horario_dia}.`
}