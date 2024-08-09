/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let zero_removed = 0;
    let len_non_empty_subarray = 0;

    for (right = 0; right < nums.length;right++) {
      if (nums[right] === 0) {
        zero_removed++;
      }

      if (zero_removed > 1) {
        if (nums[left] === 0) {
          zero_removed--;
        }
        left++;
      }

      const len = right - left;

      if (len_non_empty_subarray < len) {
        len_non_empty_subarray = len;
      }
    }
    return len_non_empty_subarray;
};