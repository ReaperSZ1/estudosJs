console.log('Banco de Dados')

//a diferença entre o objeto literal e a class é que o Objt não precisa ser instanciado
const Pessoas = { // objeto literal
    Qtd_sexo_f: 0, // praticamente um atributo static criado 
    Qtd_sexo_m: 0, // sempre se usa virgulas no final de cada linha
    média_m: 0,
    média_g: 0,
    _20anos: 0,
    sexo: ['masc', 'femi'],

    MediaM(){ 
        return Pessoas.média_m = (Pessoas.Qtd_sexo_m != 0)? Pessoas.média_m / Pessoas.Qtd_sexo_m : 0
    },
    MediaG(){
        return Pessoas.média_g = Pessoas.média_g / 5
    },

    calculos(){ // praticamente um constructor
        this._sexo = (Math.random() <=  0.5) ? Pessoas.sexo[0] : Pessoas.sexo[1]
        this._idade = Math.floor(Math.random() * 75 + 1)

        Pessoas.média_g += this._idade

        console.log(`${this._sexo}  ${this._idade}`)

        if (this._sexo == 'masc') { 
            Pessoas.média_m += this._idade 
            Pessoas.Qtd_sexo_m++
        } else { 
            if (this._idade > 20){
                Pessoas._20anos++ 
            }
            Pessoas.Qtd_sexo_f++
         }
    }
}

for(let i = 0; i < 5; i++)
    Pessoas.calculos() // ele somente chama a função ao inves de instanciar
    
console.log('a Quantidade de homens cadastrados foram: ' + Pessoas.Qtd_sexo_m)
console.log('a Quantidade de mulheres cadastradas foram: ' + Pessoas.Qtd_sexo_f)
console.log('a Média de idade do grupo é: ' + Pessoas.MediaG())
console.log('a Média de idade dos homens é: ' + Pessoas.MediaM())
console.log('a Quantidade de mulheres com idade acima de 20 anos é: ' + Pessoas._20anos)