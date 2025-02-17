/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const counter = ransomNote.split('').reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    },{});

    for(let i = 0; i < magazine.length;  i++){
        const letter = magazine[i];
        if(counter[letter] !== undefined && counter[letter] > 0){
            counter[letter] = counter[letter] - 1;
        }
    }
    
    return Object.values(counter).every(element => element === 0);
};