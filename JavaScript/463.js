/**
 * @param {number[][]} grid
 * @return {number}
 */
 function dfs(grid,i,j,x,y) {
    let cnt = 0;
    if(i<0 || j<0 || i>x-1 || j>y-1) {
        return 1;
    }
    if(grid[i][j]==0) {
        return 1;
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

var islandPerimeter = function(grid) {
    let x = grid.length;
    let y = grid[0].length;
    for(let i=0; i<x; ++i) {
        for(let j=0; j<y; ++j) {
            if(grid[i][j] == 1) {
                return dfs(grid,i,j,x,y);
            }
        }
    }
    return 0;
};