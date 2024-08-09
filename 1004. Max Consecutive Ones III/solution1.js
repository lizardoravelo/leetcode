/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;  
    let right = 0;         
    let zeros_flipped = 0;  
    let max_len = 0;      

    while(right < nums.length){
        if (nums[right] === 0) {
            zeros_flipped++;
        }

        if (zeros_flipped > k) {
            if (nums[left] === 0) {
                zeros_flipped--;
            }
            left++;
        }

        const len = right - left + 1;

        if(max_len < len){
            max_len = len
        }
        right++;
    }

    return max_len;
};