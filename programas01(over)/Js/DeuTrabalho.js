console.log('Banco de Dados')

let Qtd_sexo_f = 0, Qtd_sexo_m = 0
let média_m = 0, média_g = 0
let _20anos = 0, sexo_r = 0, idade = 0

let sexo = ['masc', 'femi']

for(let i = 0; i < 5; i++){
    sexo_r = (Math.random() <=  0.5) ? sexo[0] : sexo[1]
    idade = Math.floor(Math.random() * 75 + 1)
    média_g += idade

    console.log(`idade: ${idade}, sexo:  ${sexo_r}`)

    if (sexo_r == 'masc') { 
        média_m += idade 
        Qtd_sexo_m++
    } else { 
        if (idade > 20) 
            _20anos++ 
        Qtd_sexo_f++
     }
}
média_m = (Qtd_sexo_m != 0)? média_m / Qtd_sexo_m : 0
média_g = média_g / 5

console.log('a Quantidade de homens cadastrados foram: ' + Qtd_sexo_m) // static que conta
console.log('a Quantidade de mulheres cadastradas foram: ' + Qtd_sexo_f)
console.log('a Média de idade do grupo é: ' + média_g)
console.log('a Média de idade dos homens é: ' + média_m)
console.log('a Quantidade de mulheres com idade acima de 20 anos é: ' + _20anos)
// deu trabalho - para testalo precisa colocar o arquivo para fora como Global
