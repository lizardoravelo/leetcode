/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const gcdLength = (a, b) => b === 0 ? a : gcdLength(b, a % b);
    const len = gcdLength(str1.length, str2.length);
    const candidate = str1.substring(0, len);
    if (str1.split(candidate).join('') === '' && str2.split(candidate).join('') === '') {
        return candidate;
    }
    return "";
};