/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies);
    let i = 0;
    while(i < candies.length){
        candies[i] = (candies[i] + extraCandies) >= maxCandy;
        i++;
    }
    return candies;
};