/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//fast approach
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let i = 0;
    while(i<k){
        sum += nums[i];
        i++
    }

    let maxSum = sum;
    i = k;
    while(i< nums.length){
        currSum = sum - nums[i - k] + nums[i];
        if(maxSum < currSum){
            maxSum = currSum
        }
        sum = currSum
        i++;
    }

    return maxSum/k;
};