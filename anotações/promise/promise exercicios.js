"use strict"

function esperarSegundos(tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {resolve("3 segundos se passaram!")}, tempo * 1000);
  })
}

// Teste a função
esperarSegundos(3).then((message) => console.log(message));


// ===============================================

function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if(numero >= 10)
      resolve('deu bom cara!')
    else
      reject('deu ruim pivete')
  })
}
let random = Math.floor(Math.random() * 20 + 1)
// Teste a função
verificarNumero(random)
                  .then(msg => console.log(msg))
                  .catch(err => console.log(err));

// =====================================

function multiplicarPorDois(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      if(numero !== 0) 
        resolve(numero * 2) 
      else
        reject('isso non eqciste')
      }, 2000);
  })
}

// Teste a função
multiplicarPorDois(0)
  .then(result => multiplicarPorDois(result))
  .then(result => multiplicarPorDois(result))
  .then(result => console.log("Resultado final:", result))
  .catch(result => console.log(result))

// =====================================

function verificarIdade(pessoa) {
  return new Promise((resolve, reject) => {
    if(pessoa.idade >= 18)
      resolve(`${pessoa.nome} pode votar!`)
    else 
      reject(`${pessoa.nome} não pode votar ;-;`)
  })
}

// Teste a função
verificarIdade({ nome: "Ana", idade: 17 })
                                          .then(msg => console.log(msg))
                                          .catch(err => console.log(err));

// ===============l======================

function request1() {
  return new Promise((resolve, reject) => {
    let jooj = true
    setTimeout(() => {
      if(jooj)
        resolve('')
      else
        reject('request 1')           
    }, 2000);
  })
}

function request2() {
  return new Promise((resolve, reject) => {
    let jooj = true
    setTimeout(() => {
      if(jooj)
        resolve()
      else
        reject('request 2')           
    }, 2000);
  })
}

function request3() {
  return new Promise((resolve) => resolve())
}

// Teste usando Promise.all
Promise.all([request1(), request2(), request3()])
  .then(() => console.log("Todas as requisições completadas!"))
  .catch(error => console.error("Erro na requisição:", error));

// =====================================

function adicionar(valor) {
  return new Promise((resolve, reject) => {
    if(valor > 0)
      resolve(valor)
    else
      reject()
  })
}

function multiplicar(valor) {
  return new Promise((resolve) => resolve(valor * 10))
}

function dividir(valor) {
  return new Promise((resolve) => resolve(valor / 2))
}

// Teste o encadeamento e trate erros
adicionar(2)
  .then(result => multiplicar(result))
  .then(result => dividir(result))
  .then(result => console.log("Resultado final:", result))
  .catch(() => console.error("Erro no cálculo"));
