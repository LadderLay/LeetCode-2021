/**
 * @param {number[][]} wall
 * @return {number}
 */
 var leastBricks = function(wall) {
    let n = wall.length;
    let max = 0;
    let map = new Map();
    for(let i=0; i<n; ++i) {
        let len = wall[i].length;
        let t = 0;
        for(let j=0; j<len-1; ++j) {
            //if(j === len - 1)   continue;
            t += wall[i][j];
            let tmp = 1;
            if(map.has(t)){
                tmp = map.get(t) + 1;
            }
            map.set(t, tmp);
            max = Math.max(tmp, max);
        }
    }
    return n - max;
};

// 哈希表