/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;  // Se o array for vazio, retorna 0
    let index = 0
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[index]){
            index++
            nums[index] = nums[i];  // atualiza o valor de num[idex]
        }
    }
    console.log(nums);
    
    return index + 1 
};
let nums = [-1, 0, 0, 0, 0, 3, 3];
console.log(removeDuplicates(nums));