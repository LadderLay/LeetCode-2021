/**
 * @param {number[][]} grid
 * @return {number}
 */
 function dfs(grid,i,j,x,y) {
    let cnt = 1;
    if(i<0 || j<0 || i>x-1 || j>y-1 || grid[i][j]==0) {
        return 0;
    }
    if(grid[i][j] != 1) {
        return 0;
    }
    grid[i][j] = 2;
    cnt += dfs(grid,i-1,j,x,y);
    cnt += dfs(grid,i,j-1,x,y);
    cnt += dfs(grid,i,j+1,x,y);
    cnt += dfs(grid,i+1,j,x,y);
    return cnt;
}

var maxAreaOfIsland = function(grid) {
    let max = 0;
    let tmp;
    let x = grid.length;
    let y = grid[0].length;
    for(let i=0; i<x; ++i) {
        for(let j=0; j<y; ++j) {
            if(grid[i][j] == 1) {
                tmp = dfs(grid,i,j,x,y);
                max = Math.max(max, tmp);
            }
        }
    }
    return max;
};