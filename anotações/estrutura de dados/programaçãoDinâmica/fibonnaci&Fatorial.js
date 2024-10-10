function fatorial(n){
    if(n <= 1)
        return n
    return n * fatorial(n - 1)
}
console.log(fatorial(87));

function fibonnacci(n){ // fibonnacci de forma iterativa
    if( n <= 1) result = n

    let prev1 = 1, result = 0
    let prev2 = 0

    for(let i = 2; i <= n; i++){
        let current = prev1 + prev2;
        prev2 = prev1;
        result = prev1 = current;
    }
    return result
}
console.log('fibonnacci: ' + fibonnacci(6));

// ======== OU =======
// fibonnacci armazenando os valores anteriores em um objeto
function fibonacci(n, memo = {}) { 
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}