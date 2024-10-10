/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Mapeamento dos símbolos romanos para seus valores inteiros
    const romanMap = {
        'I': 1,   // Pode ser subtraído de 5 (V) ou 10 (X)
        'V': 5,
        'X': 10,  // Pode ser subtraído de 50 (L) ou 100 (C)
        'L': 50,
        'C': 100, // Pode ser subtraído de 500 (D) ou 1000 (M)
        'D': 500,
        'M': 1000
    };

    let total = 0; // Inicializa o total como 0
    let prevValue = 0; // Guarda o valor do símbolo anterior para verificar subtrações

    // Validação das regras dos algarismos romanos
    let consecutiveCount = 1; // Contador para símbolos consecutivos

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]]; // Valor do símbolo atual

        // Validação: Se o símbolo atual não é válido
        if (current === undefined) {
            throw new Error(`Símbolo inválido: ${s[i]}`);
        }

        // Validação: Verifica se o símbolo atual é igual ao anterior
        if (i > 0 && s[i] === s[i - 1]) {
            consecutiveCount++;
            // Regras de repetição: Não pode haver mais de 3 símbolos iguais consecutivos
            if ((current === 1 || current === 10 || current === 100) && consecutiveCount > 3) {
                throw new Error(`Repetição inválida: ${s[i]} (máximo de 3 consecutivos)`);
            }
        } else {
            consecutiveCount = 1; // Reinicia o contador se o símbolo mudar
        }

        // Validação: Verifica combinações inválidas
        if (i > 0 && (current > prevValue)) {
            // Combinações inválidas
            if (
                (prevValue === 1 && !(current === 5 || current === 10)) || // IV, IX válidos
                (prevValue === 10 && !(current === 50 || current === 100)) || // XL, XC válidos
                (prevValue === 100 && !(current === 500 || current === 1000)) // CD, CM válidos
            ) {
                throw new Error(`Combinação inválida: ${s[i - 1]}${s[i]}`);
            }
            total -= prevValue; // Subtrai o valor anterior (aplicando a regra de subtração)
        } else {
            total += prevValue; // Adiciona o valor anterior se não for uma subtração
        }

        prevValue = current; // Atualiza o valor anterior
    }

    // Adiciona o último valor processado
    total += prevValue;

    return total; // Retorna o total acumulado
    }
    
    try {
        console.log(romanToInt("MCMXCIV"));  // Saída: 1994
        console.log(romanToInt("MMMDCCCLXXXVIII"));  // Saída: 3888
        console.log(romanToInt("CCXXIV")); // Saída: 224
        console.log(romanToInt("IIII"));  // Lança erro: "Repetição inválida"
        console.log(romanToInt("VM"));    // Lança erro: "Combinação inválida"
        console.log(romanToInt("IL"));    // Lança erro: "Combinação inválida"
    } catch (error) {
        console.error(error.message);
    }
    

    



