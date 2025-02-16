/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const wordClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0, right = wordClean.length - 1;

    while(left < right){
        if(wordClean[left] !== wordClean[right]) return false;
        left+=1;
        right-=1;
    }
    
    return true;
};