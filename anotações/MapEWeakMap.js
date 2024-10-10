let map = new Map(); // Criação de um Map vazio

// Adicionando elementos ao Map usando set()
map.set('Apple', 10); // Adiciona a chave 'Apple' com o valor 10
map.set('Banana', 20); // Adiciona a chave 'Banana' com o valor 20
map.set('Orange', 30); // Adiciona a chave 'Orange' com o valor 30

// Acessando um valor usando a chave com get()
let appleQuantity = map.get('Apple'); // Recupera o valor associado à chave 'Apple'
console.log('Quantidade de maçãs:', appleQuantity); // Saída: Quantidade de maçãs: 10

// Verificando se uma chave existe no Map com has()
let hasBanana = map.has('Banana'); // Verifica se a chave 'Banana' existe no Map
console.log('Tem banana?', hasBanana); // Saída: Tem banana? true

map.clear(); // Limpando todos os elementos do Map com clear()

map.delete('Orange'); // Remove a chave 'Orange' e seu valor associado do Map
console.log('Map após remover laranja:', map); // Saída: Map após remover laranja: Map { 'Apple' => 10, 'Banana' => 20 }

map.set('Apple', 15); // Atualizando o valor da chave 'Apple' para 15
console.log('Novo valor para Apple:', map.get('Apple')); // Saída: Novo valor para Apple: 15

// Trabalhando com valores booleanos
map.set('IsFruit', true);
console.log('Valor booleano:', map.get('IsFruit')); // Saída: Valor booleano: true

console.log('Tamanho do Map:', map.size); // Obtendo o tamanho do Map com size : 2

map.forEach((value, key) => { // Usando forEach para iterar sobre o Map
    console.log(`${key}: ${value}`); // Saída: Apple: 10, Banana: 20
});

// Iterando sobre os valores do Map com values()
for (let value of map.values()) {
    console.log('Valor:', value); // Saída: Valor: 10, Valor: 20
}    

// Iterando sobre as chaves do Map com keys()
for (let key of map.keys()) {
    console.log('Chave:', key); // Saída: Chave: Apple, Chave: Banana
}    

// Iterando sobre os pares chave-valor do Map com entries()
for (let [key, value] of map.entries()) {
    console.log('Par chave-valor:', key, value); // Saída: Par chave-valor: Apple 10, Par chave-valor: Banana 20
}    

// Convertendo um Map para um objeto
let obj = Object.fromEntries(map);
console.log('Objeto:', obj); // Saída: Objeto: { Apple: 10, Banana: 20, Orange: 30 }

// Convertendo um objeto para um Map
let newMap = new Map(Object.entries(obj));
console.log('Map:', newMap); // Saída: Map: Map { 'Apple' => 10, 'Banana' => 20, 'Orange' => 30 }

// Trabalhando com chaves e valores não primitivos
let complexKey = { id: 1, name: 'Complex Key' };
map.set(complexKey, 'Some Value');
console.log('Valor para a chave complexa:', map.get(complexKey)); // Saída: Valor para a chave complexa: Some Value

// ================================ WEAK MAP ===================================================

/*
WeakMap: Usado quando você precisa associar dados a objetos, mas quer garantir que, se o objeto não for mais referenciado em outro lugar, ele seja removido automaticamente, evitando vazamento de memória.
*/

// Criando um WeakMap
let weakMap = new WeakMap();

// Criando objetos para usar como chave
let obj1 = { id: 1 };
let obj2 = { id: 2 };

// Usando objetos como chave
weakMap.set(obj1, 'Objeto 1');
weakMap.set(obj2, 'Objeto 2');

console.log(weakMap.get(obj1)); // Objeto 1
console.log(weakMap.get(obj2)); // Objeto 2

// Se os objetos não forem mais referenciados, eles serão removidos automaticamente
obj1 = null; // obj1 agora está disponível para o garbage collector

// Não há forma de verificar diretamente se o obj1 foi removido do WeakMap,
// mas ele será removido na próxima coleta de lixo.

weakMap.set('key', 'Valor'); // Isso vai lançar um erro porque 'key' não é um objeto
