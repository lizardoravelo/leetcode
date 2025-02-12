/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let charCounts = new Map();
    
    // Count frequency of each character
    for (let c of s) {
        charCounts.set(c, (charCounts.get(c) || 0) + 1);
    }

    // Find the most frequent character
    let maxCount = 0, maxChar = '';
    for (let [char, count] of charCounts) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    // If the most frequent character is too frequent, return ""
    if (maxCount > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    let ans = new Array(s.length);
    let index = 0;

    // Place the most frequent letter first
    while (charCounts.get(maxChar) > 0) {
        ans[index] = maxChar;
        index += 2;
        charCounts.set(maxChar, charCounts.get(maxChar) - 1);
    }

    // Place the remaining letters
    for (let [char, count] of charCounts) {
        while (count > 0) {
            if (index >= s.length) {
                index = 1;
            }
            ans[index] = char;
            index += 2;
            count--;
        }
    }

    return ans.join("");
};