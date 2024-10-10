
const meuSet = new Set(); // criando novo set
// const meuSet = new Set(['jooj', 12, true]); // você também pode adicionar valores logo na fonte

// Note que valores duplicados não serão adicionados
meuSet.add(10);    // Adiciona o número 10 ao Set
meuSet.add(20);    // Adiciona o número 20 ao Set
meuSet.add(30);    // Adiciona o número 30 ao Set
meuSet.add(20);    // Não será adicionado, pois 20 já existe no Set

console.log('Conteúdo do Set após adicionar elementos:', meuSet); // Exibe: Set { 10, 20, 30 }

// Verificando a presença de elementos no Set com o método has()
console.log('O Set contém o número 10?', meuSet.has(10)); // true
console.log('O Set contém o número 40?', meuSet.has(40)); // false

// Removendo um elemento específico do Set com o método delete()
meuSet.delete(20); // Remove o número 20 do Set
console.log('Conteúdo do Set após remover 20:', meuSet); // Exibe: Set { 10, 30 }

// Determinando o tamanho do Set com a propriedade size
console.log('Tamanho do Set:', meuSet.size); // Exibe: 2

// Iterando sobre os elementos do Set com um loop for...of
console.log('Iterando sobre o Set:');
for (const valor of meuSet) {
    console.log(valor);
}

// Convertendo o Set em um array com o operador spread ou o método Array.from()
const arrayDeSet = [...meuSet]; // ou Array.from(meuSet)
console.log('Set convertido para array:', arrayDeSet); // Exibe: [ 10, 30 ]
console.log(arrayDeSet[0]) // para exibir um valor especifico do set você deve transformar em array e exibir

// Limpando todos os elementos do Set com o método clear()
meuSet.clear(); // Remove todos os elementos do Set
console.log('Conteúdo do Set após clear:', meuSet); // Exibe: Set {}

// ================================ WEAK SET ===================================================

let weakSet = new WeakSet();

// só é possivel colocar objetos como chave
let obj1 = { id: 1 };
let obj2 = { id: 2 };

// Adicionando objetos ao WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Se obj1 for removido
obj1 = null; // obj1 agora está disponível para coleta de lixo

// O WeakSet automaticamente removerá obj1 na próxima coleta de lixo
// Não há como verificar diretamente se obj1 foi removido, já que WeakSet não é iterável

 
