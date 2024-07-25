/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandy = Math.max(...candies)

    for(i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= maxCandy){
            candies[i] = true;
        }
        else{
            candies[i] = false;
        }
    }
    return candies;
};