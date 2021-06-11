// 贪心
 var findMinArrowShots = function(points) {
    const len = points.length;
    if(len === 0)   return 0;
    points.sort((a,b) => a[1]-b[1]);
    let ans = points[0][1], cnt =1;
    for(let i=1; i<len; ++i) {
        if(points[i][0] > ans) {
            cnt++;
            ans = points[i][1];
        }
    }
    return cnt;

};