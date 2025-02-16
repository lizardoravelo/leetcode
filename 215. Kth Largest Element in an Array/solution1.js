/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    const counts = new Array(max - min + 1).fill(0);
    for(const n of nums) {
        counts[n - min] ++; 
    }

    for(let i = counts.length - 1; i >= 0; i --) {

        while(counts[i] > 0) {
            k--;

            if(k <= 0) return i + min;

            counts[i]--;
        }
    }
};