class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> cnt(num+1);
        cnt[0] = 0;
        for(int i=1; i<=num; i++) {
            if(i&1) {
                cnt[i] = cnt[i-1] + 1;
            } else {
                cnt[i] = cnt[i/2];
            }
        }
        return cnt;
    }
};
//考察位运算