/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n > 0) {
        n &= (n - 1); // Removes the lowest set bit
        count++;
    }
    return count;
};