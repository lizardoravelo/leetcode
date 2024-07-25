/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let n = nums.length;
    let seen = new Set();
    if(n < 2) return false;

    for (let num of nums) {
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }

    return false;
};