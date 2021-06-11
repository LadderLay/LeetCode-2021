/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    const len = intervals.length;
    if(len === 0)   return 0;
    intervals.sort((a,b) => a[1] - b[1]);
    let tag = intervals[0][1], cnt = 1;
    for(let i=1; i<len; ++i) {
        if(intervals[i][0] >= tag) {
            cnt++;
            tag = intervals[i][1];
        }
    }
    return len - cnt;
};