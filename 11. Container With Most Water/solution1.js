/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length;
    let waterCapacity = 0;

    while(left < right){
        water = Math.min(height[left], height[right]) * (right - left);
        if(water >= waterCapacity){
            waterCapacity = water;
        }
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return waterCapacity;
};