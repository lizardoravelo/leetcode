/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let lastOperation = '+';
    let currentNumer = 0;
    const length = s.length;

    for(let i = 0; i < length; i++){
        const char = s[i];

        if(!isNaN(char) && char !== ' '){
            currentNumer = currentNumer * 10 + parseInt(char,10);
        }

        if(['+','-','*','/'].includes(char) || i === length -1){
            switch(lastOperation){
                case '+':
                    stack.push(currentNumer);
                    break;
                case '-':
                    stack.push(-currentNumer);
                    break;
                case '*':
                    stack.push(stack.pop() * currentNumer);
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop() / currentNumer));
                    break;
                default:
                    break;
            }

            lastOperation = char;
            currentNumer = 0;
        }
    }

    return stack.reduce((acc,curr) => acc+curr);
};