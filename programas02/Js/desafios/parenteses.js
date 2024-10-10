
var isValid = function(s) {
    if(s[0] == ')' || s[0] == '}' || s[0] == ']') return false
    if(s.length % 2 !== 0) return false
    let stack = []
    let brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for (c = 0; c < s.length; c++) { 
        if(s[c] == '(' || s[c] == '{' || s[c] == '[' ) // se for de abertura 
            stack.push(s[c]) // adiciona ao topo da pilha
        else 
            if(brackets[s[c]] == stack[stack.length - 1]) // ')' : '(' == '(' ? 
                stack.pop() // remove do topo da pilha
            else 
                return false
    }

    return (stack.length === 0)
};
console.log(isValid('()'));
