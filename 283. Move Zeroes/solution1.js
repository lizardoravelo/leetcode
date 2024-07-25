/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroes = nums.filter(num => num !== 0);
    let zeroCount = nums.length - nonZeroes.length;
    nums.splice(0, nonZeroes.length, ...nonZeroes);
    nums.fill(0, nonZeroes.length);
};