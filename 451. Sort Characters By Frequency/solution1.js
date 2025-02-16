/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const frequency = {};

    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        frequency[letter] = (frequency[letter] || 0) + 1;
    }

    return Object.entries(frequency)
        .sort((a, b) => b[1] - a[1]) 
        .map(([char, freq]) => char.repeat(freq))
        .join('');
};