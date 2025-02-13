/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, i = 0, right = nums.length - 1;

    while(i <= right){
        if(nums[i] === 0){
            [nums[i], nums[left]] = [nums[left],nums[i]];
            left+=1;
            i++
        }
        else if(nums[i]=== 2){
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right-=1
        }
        else{
            i++;
        }
    }
};