/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    if (x >= 0 && x < 10) return true;
    let reversenum = x.toString()
        .split('') // transforma em array
        .reverse() // inverte o array
        .join('') // transforma em texto se espaçadores
        
    reversenum = parseFloat(reversenum)
    return (reversenum === x)? true : false
};

console.log(isPalindrome(323));
