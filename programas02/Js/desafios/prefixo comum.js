/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let arrayIte = []
    let str = ''

    for (let l = 0; l < strs[0].length; l++) {
        for (let i = 0; i < strs.length; i++) {
            arrayIte.push((strs[i][l])) // pega as letras iniciais de cada str do array
        }

        let test = arrayIte.every(val => val === arrayIte[0]); // verifica se os valores do array são iguais e retorna

        if(test == true)
            str += arrayIte[0]
        else 
            break
        
        arrayIte = []
    }
    return str
};

let strs = ["flor","fluxo","floug"]
console.log(longestCommonPrefix(strs));
