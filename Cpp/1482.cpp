class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        int n = bloomDay.size();
        int maxn = 0;
        if(m*k > n) return -1;
        for(int i=0; i<n; ++i) {
            maxn = max(maxn,bloomDay[i]);
        }
        int l = 1, r = maxn;
        while(l < r) {
            int mid = (l + r) / 2;
            if(check(bloomDay, mid, m, k))
                r = mid;
            else 
                l = mid + 1;
        }
        return l;
    }
    bool check(vector<int>& bloomDay, int day, int m, int k) {
        //求第day天长度为k的子数组的个数，若小于m，则不满足
        int cnt = 0, flower = 0;
        for(int i=0; i<bloomDay.size(); ++i) {
            if(bloomDay[i] <= day) {
                flower++;
                if(flower == k) {
                    cnt++;
                    flower = 0;
                }
            } else {
                flower = 0;
            }
        }
        return cnt >= m;
    }
};