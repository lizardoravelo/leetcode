/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let maxHeight = -Infinity;
    const result = [];

    for(let i = heights.length -1; i >= 0; i--){
        if(heights[i] > maxHeight) result.push(i);
        maxHeight = Math.max(heights[i],maxHeight);
    }
    return result.reverse();
};