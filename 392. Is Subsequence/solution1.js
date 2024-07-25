/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0;
    for(i = 0; i < t.length; i++){
        if(t[i] === s[index]){
            index++;
        }
    }

    return index === s.length;
};