var guessNumber = function(n) {
    let l = 1, r = n;
    while(l < r) {
        let mid = l + ~~((r - l) / 2);
        switch(guess(mid)) {
            case -1: r = mid - 1;  break;
            case 1: l = mid + 1;    break;
            case 0: return mid;
        }
    }
    return l;
};
//梳理一下二分法