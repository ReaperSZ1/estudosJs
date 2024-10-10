// 1. Usando literais e padrões básicos:
const regexLiteral = /hello/; // Procura exatamente a palavra "hello"
console.log('dsds hello'.search(regexLiteral)) // saida: index: 5

// 2. Usando o construtor RegExp:
const regexConstructor = new RegExp("hello");
console.log(regexConstructor.test("hello world")); // true

// 3. Metacaracteres:
// . (ponto) significa "qualquer caractere" (exceto quebra de linha)
const regexDot = /.+/g;
console.log("hello".replace(regexDot, '12')); // troca todos os caracteres por 12

// \d corresponde a qualquer dígito (equivalente a [0-9])
const regexDigit = /\d+/g;
console.log("abc123".replace(regexDigit, '21')); // troca todos os numeros por 21 , saida: abc12

// \w corresponde a qualquer caractere alfanumérico (A-Z, a-z, 0-9 e _)
const regexWordChar = /\w+/g;
console.log("_abc123".match(regexWordChar)); // saida: [ '_abc123' ]

// \s corresponde a qualquer espaço em branco (espaços, tabulações, etc.)
const regexSpace = /\s/;
console.log("hello world".match(regexSpace)); // saida: ' '

// 4. Quantificadores:
// * (zero ou mais ocorrências)
const regexZeroOrMore = /ho*/; // ele tenta pegar toda a ocorrencia
console.log("hoooo".match(regexZeroOrMore)); // saida: 'hoooo'
console.log("hhhoooo".match(regexZeroOrMore)); // saida: 'h'

// + (uma ou mais ocorrências)
const regexOneOrMore = /ho+/;
console.log("hoho".match(regexOneOrMore)); // saida: 'ho'
console.log("hhhoooo".match(regexOneOrMore)); // saida: 'hoooo'

// ? (zero ou uma ocorrência)
const regexZeroOrOne = /ho?/;
console.log("hoho".match(regexZeroOrOne)); // saida: 'ho'
console.log("hoooo".match(regexZeroOrOne)); // saida: 'ho'
console.log("hhhoooo".match(regexZeroOrOne)); // saida: 'h'

// {n,m} (entre min e max de ocorrências)
const regex = /a{2,4}/; // Aqui, a letra "a" deve aparecer pelo menos 2 vezes e no máximo 4 vezes
const jooj = /a{3}/; // exetamente 3 vezes
const ojjo = /a{2,}/; // no minimo 2 vezes, e sem limites
console.log(regex.test("a"));     // false (apenas 1 "a")
console.log(regex.test("aa"));    // true 
console.log("aaaaa".match(regex)); // saida: 'aaaa' no máximo 4 As

// 5. Grupos e Alternância:
// Grupos de captura: usamos parênteses para agrupar parte de uma expressão regular
const regexGroup = /(hello) (world)/;
const matchGroup = regexGroup.exec("hello world"); // exec retorna um array 
console.log(matchGroup[0]); // "hello world"
console.log(matchGroup[1]); // "hello"
console.log(matchGroup[2]); // "world"

// Alternância (ou lógico |): encontra um entre vários padrões
const regexOr = /cat|dog/;
console.log("I have a cat and dog".match(regexOr)); // saida: 'cat'
console.log("I have a dog and a cat".match(regexOr)); // saida: 'dog'

// 6. Conjuntos de caracteres (classes):
// [abc] corresponde a qualquer caractere "a", "b" ou "c"
const regexo = /[abc]/;
console.log("dog".match(regexo));      // null (nenhum "a", "b", ou "c" encontrado)
console.log("apple".match(regexo));    // ["a"] (o primeiro "a" foi encontrado)
console.log("banana".match(regexo));   // ["b"] (o primeiro "b" foi encontrado)

// [^abc] corresponde a qualquer caractere que NÃO seja "a", "b" ou "c"
const regexNegatedSet = /[^abc]/;
console.log(regexNegatedSet.test("d")); // true

// Faixas de caracteres: [a-z] para letras minúsculas, [0-9] para dígitos
const regexRange = /[a-z]/;
console.log("I have".match(regexRange)); // saida: 'h'
console.log(regexRange.test("g")); // true (encontra "g" que está entre "a" e "z")

// 7. Modificadores (flags):
// \1 (referencia retroativa de um grupo ())

// Imagine que você quer encontrar padrões repetidos em uma string, como duas palavras idênticas seguidas
const er = /(word)\1/;
const str = "wordword";
console.log(str.match(er)); // 'wordword', 'word'
console.log(er.test(str));  // true

// i (ignora maiúsculas e minúsculas)
const regexIgnoreCase = /hello/i;
console.log(regexIgnoreCase.test("HELLO")); // true

// g (busca global para encontrar todas as ocorrências)
const regexGlobal = /hello/g;
console.log("hello hello".match(regexGlobal)); // ["hello", "hello"]

// m (busca em várias linhas)
const regexMultiLine = /^world/m; // O "^" corresponde ao início de cada linha
console.log("hello\nworld".match(regexMultiLine)); // saida: 'world'

// 8. Métodos principais:
// .test() retorna true ou false
console.log(/world/.test("hello world")); // true (encontra "world")

// .exec() retorna detalhes sobre a primeira correspondência
const regexExec = /(\d+)/;
const execResult = regexExec.exec("Order number: 12345");
console.log(execResult[0]); // "12345" (o número encontrado)
console.log(execResult.index); // 13 (posição da primeira correspondência)

// .match() retorna todas as correspondências (útil com a flag 'g')
const regexMatch = /\d+/g;
console.log("Product codes: 123, 456, 789".match(regexMatch)); // ["123", "456", "789"]

// .replace() substitui correspondências
const text = "hello world";
const replacedText = text.replace(/world/, "JavaScript");
console.log(replacedText); // "hello JavaScript"

// .split() divide uma string em um array com base no padrão
const regexSplit = /\s+/; // Dividir pelo(s) espaço(s)
const splitResult = "split this text".split(regexSplit);
console.log(splitResult); // ["split", "this", "text"]

// 9. Escapando caracteres especiais:
// Para corresponder a metacaracteres como ".", "*", "+" precisamos escapar com uma barra invertida "\"
const regexEscape = /\./;
console.log(regexEscape.test("This is a dot.")); // true (encontra o ponto final)

/* Em expressões regulares (regexp) no JavaScript, o símbolo $ é usado como um marcador de fim de linha ou fim da string. Ele verifica se a expressão regular corresponde ao final de uma linha ou de uma string. Ou seja, o $ garante que o padrão deve aparecer no final do texto. */
let joouj = /abc$/;
console.log(regex.test("123abc")); // true (a string termina com "abc")
console.log(regex.test("abc123")); // false (a string não termina com "abc")
