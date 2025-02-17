/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counter = new Map();

    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        counter.set(letter, (counter.get(letter) || 0 ) + 1);
    }
    
    for(let i = 0; i < s.length; i++){
        if(counter.get(s[i]) === 1){
            return i;
        }
    }

    return -1;
};