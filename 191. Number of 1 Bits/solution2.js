/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n > 0) {
        count += n & 1;  // Check if last bit is 1
        n = n >>> 1;     // Right shift (ignores sign)
    }
    return count;
};