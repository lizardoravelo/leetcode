/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const result = s.split('');

    for(let i = 0; i < s.length; i++){
        const char = s[i];
        if(char === '(')
            stack.push(i);
        else if(char === ')')
            if(stack.length > 0)
                stack.pop();
            else{
                result[i] = ''
            }
    }

    while(stack.length > 0){
        result[stack.pop()] = '';
    }

    return result.join('');
};