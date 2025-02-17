/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexTracker = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (indexTracker[diff] !== undefined) {
            return [indexTracker[diff], i]
        }
        indexTracker[num]= i;
    }
};