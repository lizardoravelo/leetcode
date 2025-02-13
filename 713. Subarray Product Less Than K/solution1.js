/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    
    let left = 0;
    let product = 1;
    let counter = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (left <= right && product >= k) {
            product /= nums[left];
            left++;
        }

        counter += right - left + 1;
    }

    return counter;
};