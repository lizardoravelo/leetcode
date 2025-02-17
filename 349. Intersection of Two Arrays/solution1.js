/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const num1 = new Set(nums1);
    const num2 = Array.from(new Set(nums2));
    const result = [];

    for(let i = 0; i < num2.length; i++){
        const num = num2[i];
        if(num1.has(num)){
            result.push(num);
        }
    }

    return result;
};