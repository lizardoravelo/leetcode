/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   const mapper = new Map();
   let counter = 0;
   let prefixSum = 0;
   mapper.set(0,1);

   for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i];
        const tempDiff = prefixSum - k;

        if(mapper.has(tempDiff)){
            counter += mapper.get(tempDiff);
        }

        mapper.set(prefixSum, (mapper.get(prefixSum) || 0) + 1);
   }
   return counter;
};