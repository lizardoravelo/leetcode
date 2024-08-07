/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//fast solution
var maxVowels = function(s, k) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  let maximumNumVowel = 0, countedVowels = 0;
  let i = 0;

   while(i < k){
    if(vowels.includes(s[i])) countedVowels++;
    i++;
   }  

    maximumNumVowel = countedVowels;
    while(i < s.length){
        if(vowels.includes(s[i])) countedVowels++;
        if (vowels.includes(s[i - k])) countedVowels--;

        if(countedVowels > maximumNumVowel) {
            maximumNumVowel =countedVowels
        }
        i++
    }


  return maximumNumVowel;
};