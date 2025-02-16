/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let pointer = 0;
    let i = 0;

    while (i < abbr.length) {
        if (isLetter(abbr[i])) {  
            if (word[pointer] !== abbr[i]) return false;
            pointer++;
            i++;
        } else {
            if (abbr[i] === '0') return false;
            
            let num = 0;
            while (i < abbr.length && !isLetter(abbr[i])) {
                num = num * 10 + (abbr[i] - '0');
                i++;
            }
            pointer += num;
        }
    }

    return pointer === word.length;
};

function isLetter(char){
    return /[a-z]/.test(char);
}