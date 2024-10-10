// 1. Criando símbolos únicos
const sym1 = Symbol('description1');
const sym2 = Symbol('description2');

console.log(sym1 === sym2); // false, pois cada Symbol é único, mesmo que tenham descrições semelhantes.


// 2. Usando símbolos como chaves de propriedade em objetos
const car = {
    make: 'Toyota',
    model: 'Corolla',
    [sym1]: 'Special Feature 1',
    [sym2]: 'Special Feature 2'
};

console.log(car[sym1]); // 'Special Feature 1'
console.log(car[sym2]); // 'Special Feature 2'
console.log(Object.keys(car)); // ['make', 'model'] - chaves Symbol não aparecem

// Explicação:
// As propriedades com chaves Symbol não aparecem quando iteramos sobre as chaves do objeto, o que ajuda a "esconder" essas propriedades.


// 3. Recuperando símbolos de um objeto
const symbolsInCar = Object.getOwnPropertySymbols(car);
console.log(symbolsInCar); // [ Symbol(description1), Symbol(description2) ]
console.log(car[symbolsInCar[0]]); // 'Special Feature 1'

// Explicação:
// Podemos recuperar todas as propriedades Symbol de um objeto usando `Object.getOwnPropertySymbols()`.


// 4. Símbolos Globais - Usando Symbol.for()
const globalSym1 = Symbol.for('globalKey');
const globalSym2 = Symbol.for('globalKey');

console.log(globalSym1 === globalSym2); // true, pois ambos apontam para o mesmo símbolo global

// Explicação:
// `Symbol.for()` cria ou retorna um símbolo existente com a chave fornecida. Os símbolos criados dessa forma são armazenados em um registro global.


// 5. Usando a descrição de um símbolo
console.log(globalSym1.description); // 'globalKey'

// Explicação:
// `Symbol.prototype.description` retorna a descrição opcional que foi passada quando o símbolo foi criado.


// 6. Bem-Conhecidos Symbols (Well-Known Symbols) - Symbol.iterator
const iterableObject = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const value of iterableObject) {
    console.log(value); // 1, 2, 3
}

// Explicação:
// `Symbol.iterator` é um símbolo bem conhecido que permite criar objetos iteráveis personalizados. Ele é usado pelos métodos de iteração, como o `for...of`


// 7. Usando Symbol.toStringTag para personalizar a saída de toString()
const myObject = {
    [Symbol.toStringTag]: 'MyCustomObject'
};

console.log(Object.prototype.toString.call(myObject)); // [object MyCustomObject]

// Explicação:
// `Symbol.toStringTag` permite personalizar a forma como um objeto é representado como string. Isso pode ser útil para debugging ou para fornecer mais informações sobre um objeto.


// 8. Símbolos como identificadores "privados"
const privateId = Symbol('id');

class User {
    constructor(name) {
        this.name = name;
        this[privateId] = Math.random();
    }

    getId() {
        return this[privateId];
    }
}

const user = new User('Alice');
console.log(user.name); // 'Alice'
console.log(user.getId()); // Mostra o ID gerado
console.log(Object.keys(user)); // ['name'] - privateId não aparece
console.log(user[privateId]); // Podemos acessar diretamente pelo Symbol

// Explicação:
// Usar símbolos como propriedades "privadas" em classes ou objetos é uma maneira de proteger dados que não devem ser facilmente acessíveis ou modificáveis por código externo.
