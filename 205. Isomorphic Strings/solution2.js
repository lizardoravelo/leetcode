/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const charIndexT = {};
    const charIndexS = {};

    for (let i = 0; i < s.length; i++){
        if (!(s[i] in charIndexS)){
            charIndexS[s[i]] = i;
        }
        if (!(t[i] in charIndexT)){
            charIndexT[t[i]] = i;
        }
        if (charIndexS[s[i]] !== charIndexT[t[i]]){
            return false;
        }
    }
    return true;
};