/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;

    let i = 0, len = nums.length;
    while (i < len) {
        if(nums[i] <= first) {
            first = nums[i]
        }
        else if(nums[i] <= second) {
            second = nums[i]
        }
        else {
            return true;
        }
        i++;
    }

    return false;
};