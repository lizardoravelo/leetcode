/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const result = s.split('').reduce((acc, curr, index) => {
        if (curr === '(') stack.push(index);
        else if (curr === ')') {
            if (stack.length > 0) stack.pop();
            else return acc;
        }
        acc[index] = curr; // Keep character at its original position
        return acc;
    }, []); // Pre-fill with empty strings

    // Remove unmatched '(' using stack indices
    while (stack.length > 0) {
        result[stack.pop()] = ''; // Remove the unmatched '('
    }

    return result.join('');
};