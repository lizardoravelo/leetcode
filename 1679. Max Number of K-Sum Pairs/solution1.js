/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = new Map();
    let operations = 0;

    for (let num of nums) {
        let complement = k - num;
        if (count.get(complement) > 0) {
            operations++;
            count.set(complement, count.get(complement) - 1);
        } else {
            count.set(num, (count.get(num) || 0) + 1);
        }
    }
    
    return operations;
};