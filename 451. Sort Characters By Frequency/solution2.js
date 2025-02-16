/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const frequency = new Map();

    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        frequency.set(letter, (frequency.get(letter) || 0) + 1);
    }

    return [...frequency.entries()]
        .sort((a, b) => b[1] - a[1]) 
        .map(([char, freq]) => char.repeat(freq))
        .join('');
};