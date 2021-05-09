/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let v = start;
    for(let i=1; i<n; ++i) {
        v = v ^ (start + 2 * i);
    }
    return v;
};

