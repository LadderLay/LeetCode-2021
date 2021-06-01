/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let map = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    for(let i=1; i<m+1; ++i) {
        for(let j=1; j<n+1; ++j) {
            if(i===1 || j===1) {
                map[i][j] = Math.max(map[i-1][j],map[i][j-1]) + grid[i-1][j-1];
            } else {
                map[i][j] = Math.min(map[i-1][j],map[i][j-1]) + grid[i-1][j-1];
            }
        }
    }
    return map[m][n];
};

//有优化空间