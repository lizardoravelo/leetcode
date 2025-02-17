/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const counter = new Map();
    const bitString = n.toString(2);
    for(let i = 0; i < bitString.length; i++){
        const number = bitString[i];
        counter.set(number, (counter.get(number) || 0) +1);
    }
    return counter.get('1');
};