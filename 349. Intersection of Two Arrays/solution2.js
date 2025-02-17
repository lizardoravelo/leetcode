/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const counterMap = new Map();
    const result = new Set();

    for(let i = 0; i < nums1.length; i++){
        counterMap.set(nums1[i],0);
    }

    for(let i = 0; i < nums2.length; i++){
        if(counterMap.has(nums2[i])){
            result.add(nums2[i]);
        }
    }

    return [...result];
};