/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    while(n !== 1){
        if (seen.has(n)) return false;
        seen.add(n);

        n = getNextValue(n);
    }

    return true
};

function getNextValue (n) {
    let sum = 0;

    while(n > 0){
        let digit = n % 10;
        sum += Math.pow(digit, 2);
        n = Math.floor(n / 10);
    }

    return sum;
}