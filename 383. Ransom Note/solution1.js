/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const counter = new Map();

    for(let i = 0; i < ransomNote.length; i++){
        const letter = ransomNote[i];
        counter.set(letter, (counter.get(letter) || 0) + 1);
    }


    for(let i = 0; i < magazine.length;  i++){
        const letter = magazine[i];
        if(counter.has(letter)){
            counter.set(letter,counter.get(letter) - 1);
            if(counter.get(letter) === 0){
                counter.delete(letter);
            }
        }
    }
    
    return counter.size === 0;
};