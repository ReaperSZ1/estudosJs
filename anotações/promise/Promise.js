// Criando uma Promise
let minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Altere para false para simular um erro
    let time = 3000
    setTimeout(() => {
        if (sucesso) {
            resolve("A operação foi bem-sucedida!"); // esse valor cai no parametro de then 
        } else {
            reject("Ocorreu um erro."); // esse valor cai no parametro de catch 
        }
    }, time) // atualiza o valor depois de três segundos
});
// Usando a Promise
minhaPromise // poe a promisse e identa desse jeito ou poe antes de cada um o minhaPromise
            .then((mensagem) => jooj = console.log(mensagem)) // Será executado se a Promise for resolvida
            .catch((erro) => jooj = console.error(erro)); // Será executado se a Promise for rejeitada
let jooj = console.log('loading...') // imprime isso no primeiro momento depois linha 11

const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 ok'), 2000))
const p2 = new Promise((resolve) => resolve('p2 ok'))
const p3 = new Promise((resolve) => resolve('p3 ok'))

const allpromises = Promise.all([p1, p2, p3]).then((data) => console.log(data)) // promise all retorna em forma de array os resolves dos promises se todos forem resolvidos, saida: [ 'p1 ok', 'p2 ok', 'p3 ok' ]
const rrace = Promise.race([p1, p2, p3]).then((data) => console.log(data)) // retorna a promise que se resolver primeiro saida: p2 ok

// ================ CALLBACK =======================
//callback pega uma função com argumento e chama essa função quando uma ação é concluida
function saudar(nome, callback) {
    console.log("Iniciando saudação...");
    callback(nome); // Chamando o callback com o argumento 'nome'
}
  
function cumprimentar(nome) {
    console.log(`Olá, ${nome}!`);
}

// Passa a função 'cumprimentar' como callback para 'saudar'
saudar("João", cumprimentar);
  