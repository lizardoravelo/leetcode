/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const prefixSum = Array(s.length + 1).fill(0);

    for (let i = 0; i < s.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + (vowels.has(s[i]) ? 1 : 0);
    }

    let maxVowels = 0;

    for (let i = k; i <= s.length; i++) {
        maxVowels = Math.max(maxVowels, prefixSum[i] - prefixSum[i - k]);
    }

    return maxVowels;
};