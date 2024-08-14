/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const length = nums.length;
    let leftSum = 0;
    let totalSum = nums.reduce((partialSum, a) => partialSum + a, 0);

    for(i = 0; i < length; i++){
        const rightSum = totalSum - nums[i] - leftSum;
        if(leftSum === rightSum) return i;
        leftSum += nums[i];
    }

    return -1;
};