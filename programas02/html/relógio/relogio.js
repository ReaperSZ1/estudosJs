const res = document.querySelector('#res')
const AlertAlarm = document.querySelector('#alarme')
const Select1 = document.querySelector('#S1')
const Select2 = document.querySelector('#S2')
const Select3 = document.querySelector('#S3')

let alarme = false
let novo_ts, tempo; 


for(let i = 0; i <= 23; i++){
    let opt = document.createElement('option')
    opt.innerText = (i < 10)?'0' + i: i
    Select1.appendChild(opt)
}
for(let i = 0; i <= 59; i++){
    let opt = document.createElement('option')
    opt.innerText = (i < 10)?'0' + i: i
    Select2.appendChild(opt)
}
for(let i = 0; i <= 59; i++){
    let opt = document.createElement('option')
    opt.innerText = (i < 10)?'0' + i: i
    Select3.appendChild(opt)
}
// o evento change é ativado quando o usuário seleciona uma nova opção.
Select1.addEventListener('change', () => res.innerHTML = Select1.value) // 
Select2.addEventListener('change', () => res.innerHTML = Select1.value + ':' + Select2.value)
Select3.addEventListener('change', () => res.innerHTML = Select1.value + ':' + Select2.value + ':' + Select3.value)

function clock(){
    tempo = new Date()
    document.querySelector('h1').innerHTML = ' HORA CERTA!!!! <br>' + tempo.toLocaleTimeString() 
    let resultado = (tempo.getHours() == Select1.value && tempo.getMinutes() == Select2.value && tempo.getSeconds() == Select3.value)? true : false;
    if(resultado && alarme)
        AlertAlarm.innerHTML = 'ALARME TOCANDO!!'
}
setInterval(clock, 500)
    
function ativar(){
    alarme = true
    res.innerHTML = `Alarme marcado para: ${Select1.value}:${Select2.value}:${Select3.value}`// imprime uma vez o tempo atual
    AlertAlarm.innerHTML = 'vai tocar em breve!'
}
        
function desativar(){
    alarme = false
    res.innerHTML = ''
    AlertAlarm.innerHTML = ''
}
// agora pegue o valor clicado transforme e adicione ao novo timestamp para o sistema captar isso e colocar como o alarme que serta ativado quando chegar esse horario