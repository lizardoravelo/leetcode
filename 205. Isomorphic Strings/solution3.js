/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false; // If lengths differ, not isomorphic

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i]; // Character from s
        const charT = t[i]; // Character from t

        // Check if charS is already mapped
        if (sMap.has(charS) && sMap.get(charS) !== charT) return false;
        // Check if charT is already mapped
        if (tMap.has(charT) && tMap.get(charT) !== charS) return false;

        // Establish new mappings
        sMap.set(charS, charT);
        tMap.set(charT, charS);
    }

    return true;
};