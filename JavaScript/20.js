var isValid = function(s) {
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    let stack = [];
    for(let i=0; i<s.length; ++i) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if(map.get(s[i]) === stack[stack.length-1]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};