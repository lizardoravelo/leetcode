/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const characters = s.split('');
    const vowelsReversed = [];
    
    // Collect all vowels from the end to the beginning
    for (let i = s.length - 1; i >= 0; i--) {
        if (vowels.includes(characters[i])) {
            vowelsReversed.push(characters[i]);
        }
    }
    
    let vowelIndex = 0;
    
    // Replace vowels from the beginning to the end with reversed vowels
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(characters[i])) {
            characters[i] = vowelsReversed[vowelIndex];
            vowelIndex++;
        }
    }

    return characters.join('');
};