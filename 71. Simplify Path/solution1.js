/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const splitPath = path.split('/');

    for(let i = 0; i < splitPath.length; i++){
        const part = splitPath[i];
        if(part === '..') stack.pop();
        else if(part === '...') stack.push(part);
        else if(part !== '.' && part !== '') stack.push(part);
    }

    return `/${stack.join("/")}`;
};