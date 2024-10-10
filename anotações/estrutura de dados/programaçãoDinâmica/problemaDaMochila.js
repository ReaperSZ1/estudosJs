function knapsack(items, capacity) {
    const n = items.length;

    // Criar uma tabela de tamanho (n+1) x (capacity+1)
    let dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // Preencher a tabela de programação dinâmica
    for (let i = 1; i <= n; i++) { // iterando sobre os itens
        for (let w = 1; w <= capacity; w++) { // itera sobre o tamanho
            if (items[i - 1].weight > w) // esse item não cabe na mochila?
                dp[i][w] = dp[i - 1][w]; // Não pega o item i // 0,0,0 | 1500,1500 delete 
            else // esse item cabe na mochila
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].value);   
        }
    }

    // Agora, precisamos descobrir quais itens foram escolhidos
    let chosenItems = [];
    let w = capacity;
    
    for (let i = n; i > 0; i--) { // itera sobre a quantidade de itens
        if (dp[i][w] !== dp[i - 1][w]) {
            // Se o valor mudou, significa que o item i foi incluído
            chosenItems.push(items[i - 1]); // adiciona os itens ao array
            w -= items[i - 1].weight; // Reduzir a capacidade pela do item escolhido
        }
    }

    // Retorna o valor máximo e os itens escolhidos
    return {
        maxValue: dp[n][capacity],
        chosenItems: chosenItems.reverse()  // Inverte para mostrar na ordem correta
    };
}

// Exemplo de uso:
const items = [
    { name: 'rádio', weight: 4, value: 3000 }, // [0]
    { name: 'violão', weight: 1, value: 1500 }, // [1]
    { name: 'notebook', weight: 3, value: 2000 }
];

const capacity = 4;

const result = knapsack(items, capacity);

console.log("Valor máximo que pode ser obtido:", result.maxValue);
console.log("Itens escolhidos:");
result.chosenItems.forEach(item => {
    console.log(`${item.name} (Peso: ${item.weight}, Valor: ${item.value})`);
});