/**
 * @param {number} numRows
 * @return {number[][]}
 */; 
var generate = function(numRows) {
    let res = [];
    for(let i=0; i<numRows; ++i) {
        let tmp = new Array(i+1).fill(1);
        for(let j=1; j<i; ++j) {
            tmp[j] = res[i-1][j-1] + res[i-1][j];
        }
        res.push(tmp);
    }
    return res;
};