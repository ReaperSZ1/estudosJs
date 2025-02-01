/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindrome = function(num) {
    if(num < 0) return false
    if (num >= 0 && num < 10) return true;
    let reversenum = num.toString()
        .split('') // transforma em array
        .reverse() // inverte o array
        .join('') // transforma em tenumto se espaçadores
        
    reversenum = parseFloat(reversenum)
    return (reversenum === num)? true : false
};

console.log(isPalindrome(323));
