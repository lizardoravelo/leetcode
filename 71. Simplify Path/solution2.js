/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const splitPath = path.split('/').filter(part => part !== '');

    for(let i = 0; i < splitPath.length; i++){
        const part = splitPath[i];
        if(part === '..') stack.pop();
        else if(part === '...') stack.push(part);
        else if(part !== '.') stack.push(part);
    }

    let result = '';
    for(let route of stack){
        result += `/${route}`;
    }
    
    return result === '' ? '/':result;
};