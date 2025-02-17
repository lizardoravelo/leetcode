/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const sMap = new Array(256).fill(0);
    const tMap = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charS = s.charCodeAt(i);
        const charT = t.charCodeAt(i);

        if (sMap[charS] !== tMap[charT]) return false;

        sMap[charS] = i + 1;
        tMap[charT] = i + 1;
    }

    return true;
};