/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const wordClean =s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return wordClean === [...wordClean].reverse().join('');
};