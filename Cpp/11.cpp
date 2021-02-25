//双指针问题
class Solution {
public:
    int maxArea(vector<int>& height) {
        int ans = 0, area;
        int l = 0, r = height.size() - 1;
        while(l < r) {
            area = min(height[l], height[r]) * (r - l);
            ans = max(ans, area);
            if(height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }
        return ans;

    }
};