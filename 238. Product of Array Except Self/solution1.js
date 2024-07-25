/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    //O(n^2)
    // let answer = [];
    // for(i = 0; i < nums.length; i++){
    //     let value = 1;
    //     for(j = 0; j < nums.length; j++){
    //         if(i !== j){
    //             value = value * nums[j];
    //         }
    //     }
    //     answer.push(value);
    // }
    // return answer
    
    let n = nums.length;
    let answer = new Array(n).fill(1);

    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};