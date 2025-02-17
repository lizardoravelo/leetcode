/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counter = new Array(26).fill(0); // Create an array for letter counts

    // Step 1: Count occurrences
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++; // 'a' has ASCII 97, so subtract 97
    }

    // Step 2: Find first unique character
    for (let i = 0; i < s.length; i++) {
        if (counter[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }

    return -1;
};