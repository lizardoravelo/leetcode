/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let maxNum = -Infinity;
    let index = 0;

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(maxNum < num) {
            maxNum = num;
            index = i;
        }
    }
    return index;
};