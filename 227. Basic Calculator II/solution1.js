/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let lastOperation = '+';
    let currentNumber = 0;
    const length = s.length;
    
    for(let i = 0; i < length; i++){
        const char = s[i];
        
        if(char >= '0' && char <= '9'){
            currentNumber = currentNumber * 10 + (char.charCodeAt(0) - 48);
        } 
        
        if((char === '+' || char === '-' || char === '*' || char === '/') || i === length - 1){
            if(lastOperation === '+'){
                stack.push(currentNumber);
            } else if(lastOperation === '-'){
                stack.push(-currentNumber);
            } else if(lastOperation === '*'){
                stack.push(stack.pop() * currentNumber);
            } else if(lastOperation === '/'){
                stack.push(Math.trunc(stack.pop() / currentNumber));
            }
            
            lastOperation = char;
            currentNumber = 0;
        }
    }
    
    let result = 0;
    for(let num of stack){
        result += num;
    }
    
    return result;
};