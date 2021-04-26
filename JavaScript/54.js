/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const row = matrix.length, col = matrix[0].length;
    let l=0, r=col-1, t=0, b=row-1, size=row*col;
    let res = [];
    while(res.length < size) {
        for(let i=l; i<=r; ++i) res.push(matrix[t][i]);
        t++;
        if(res.length === size) break;
        for(let j=t; j<=b; ++j) res.push(matrix[j][r]);
        r--;
        if(res.length === size) break;
        for(let i=r; i>=l; --i) res.push(matrix[b][i]);
        b--;
        for(let j=b; j>=t; --j) res.push(matrix[j][l]);
        l++;
    }
    return res;
};

//有空重新写一下
//不是很好的实现