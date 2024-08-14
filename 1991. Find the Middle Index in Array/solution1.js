/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const length = nums.length;
    let totalSum = nums.reduce((acc,num)=> acc+=num,0);
    let leftSum = 0;

    for(i=0; i < length; i++){
        rightSum = totalSum - nums[i] - leftSum;

        if(leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};