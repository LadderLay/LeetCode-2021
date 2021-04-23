/**
 * @param {character[][]} grid
 * @return {number}
 */
function dfs(grid,i,j,x,y) {
    if(i<0 || j<0 || i>x-1 || j > y-1 || grid[i][j] == '0') 
        return;
    grid[i][j] = '0';
    dfs(grid,i-1,j,x,y);
    dfs(grid,i,j-1,x,y);
    dfs(grid,i,j+1,x,y);
    dfs(grid,i+1,j,x,y);
}


var numIslands = function(grid) {
    let cnt = 0;
    let x = grid.length;
    if(x === 0) return 0;
    let y = grid[0].length;
    for(let i=0; i<x; ++i) {
        for(let j=0; j<y; ++j) {
            if(grid[i][j] === "1") {
                dfs(grid,i,j,x,y);
                cnt++;
            }
        }
    }
    return cnt;
};