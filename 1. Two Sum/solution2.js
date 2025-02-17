/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (index.has(diff)) {
            return [index.get(diff), i]
        }
        index.set(nums[i], i)
    }
};