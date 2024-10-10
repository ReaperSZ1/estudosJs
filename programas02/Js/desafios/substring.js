function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let maxLength = 0;
    let previous = 0;

    // Loop através da string com o ponteiro direito
    for (let current = 0; current < s.length; current++) {
        // Se o caractere já estiver no conjunto, remove até não haver repetição
        while (charSet.has(s[current])) {
            charSet.delete(s[previous]);
            previous++;
        }

        // Adiciona o novo caractere na janela
        charSet.add(s[current]);

        // Atualiza o comprimento máximo da substring sem repetição
        maxLength = Math.max(maxLength, current - previous + 1);
    }

    return maxLength;
}

// Exemplos de uso:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // 0
