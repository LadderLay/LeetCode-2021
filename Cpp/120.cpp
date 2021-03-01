class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        int m = triangle[n-1].size();
        vector<int> dp(m+1,0);
        for(int i=n-1; i>=0; --i) {
            for(int j=0; j<triangle[i].size(); j++) {
                dp[j] = min(dp[j], dp[j+1]) + triangle[i][j];
            }
        }
        return dp[0];
    }
};
//自底向上去做，减少对边界情况的讨论