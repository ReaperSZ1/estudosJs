// Definindo um objeto literal
const carro = {
    marca: "Toyota",           // Propriedade chave-valor
    modelo: "Corolla",
    ano: 2021,
    cor: "Prata",
    
    // Método: A função associada ao objeto
    ligar() {
      console.log(`${this.marca} ${this.modelo} está ligado.`);
    },
  
    // Método com parâmetro
    acelerar: function(velocidade) {
      console.log(`${this.marca} ${this.modelo} está acelerando a ${velocidade} km/h.`);
    },
  
    // Método que altera uma propriedade do objeto
    pintar(novaCor) {
      this.cor = novaCor;
      console.log(`O carro foi pintado de ${this.cor}.`);
    }
  };
  
  // Usando as propriedades do objeto
  console.log(carro.marca);    // Saída: Toyota
  console.log(carro.modelo);   // Saída: Corolla
  
  // Chamando métodos do objeto
  carro.ligar();               // Saída: Toyota Corolla está ligado.
  carro.acelerar(100);         // Saída: Toyota Corolla está acelerando a 100 km/h.
  
  // Alterando a cor do carro
  carro.pintar("Vermelho");    // Saída: O carro foi pintado de Vermelho.
  console.log(carro.cor);      // Saída: Vermelho
  
  // Adicionando uma nova propriedade ao objeto
  carro.kmRodados = 20000;
  console.log(`Quilometragem: ${carro.kmRodados} km`);  // Saída: Quilometragem: 20000 km

// um array contendo diversos objetos
  const arrayobjetos = [ 
    {       
        modelo: "rapido",
        ano: 2004,
        cor: "vermelho"
    },
    {
        marca: "ferrari",           
        modelo: "gallardo",
        ano: 2008,
        cor: "cinza"
    }
  ]
console.log(arrayobjetos[1].marca) // SAIDA: ferrari
const c1 = Object.assign({}, carro) // clona o objeto carro e coloca em c1
c1.ligar()

const o1 = {o1: 1}
const o2 = {o2: 2}
const o3 = {o3: 3}
const jooj = Object.assign(o1,o2,o3) // ele esta mesclando os tres objetos
console.log(jooj) // { o1: 1, o2: 2, o3: 3 }

//   delete(carro, marca) // deleta o atributo marca de carro
//   console.log(carro.marca) // error: marca is not defined

const c2 = Object.create(carro) // instancia o objeto carro e coloca em c2
c2.ligar() // Toyota Corolla está ligado.

