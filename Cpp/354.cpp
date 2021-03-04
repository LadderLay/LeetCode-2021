class Solution {
public:
    static bool mySort(const vector<int> &a, const vector<int> &b) {
        return a[0]<b[0] || a[0] == b[0]&& a[1]>b[1];
    }
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        if(envelopes.empty())
            return 0;
        int n = envelopes.size();
        int ans = 0;
        vector<int> dp(n);
        sort(envelopes.begin(),envelopes.end(),mySort);
        for(int i=0; i<n; ++i) {
            dp[i] = 1;
            for(int j=0; j<i; ++j) {
                if(envelopes[j][1] < envelopes[i][1]) {
                    dp[i] = max(dp[j]+1, dp[i]);
                }
            }
            ans = max(ans,dp[i]);
        }
        return ans;
    }
};