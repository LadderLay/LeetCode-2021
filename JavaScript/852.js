// 依然是二分

//常规 O（n）
var peakIndexInMountainArray = function(arr) {
    let ans;
    for(let i=0; i<arr.length-1; ++i) {
        if(arr[i] > arr[i+1]) {
            ans = i;
            break;
        }
    }
    return ans;
};
//二分O（lgn)
var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;
    while(l < r) {
        let mid = ~~((l + r) / 2);
        if(arr[mid] < arr[mid+1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r;
};

//整理 二分法一些区间取值的处理