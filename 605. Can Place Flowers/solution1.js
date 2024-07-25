/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(i = 0; i < flowerbed.length; i++){
        if(n === 0) {
           return true;
        }
        if(flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)){
            n--;
            i++;
        }
    }
    return n === 0;
};