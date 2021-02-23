//sliding window问题
//解题关键在于将问题化简为求所有不生气的顾客总和（固定值）和求使用秘密技巧挽回顾客的值
//问题就随之转化成了长度为X的子数组能气走/挽回的顾客的最大值
class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int X) {
        int n = customers.size();
        int sum = 0, xmax = 0, tmp;
        for(int i=0; i<n; i++) {
            sum += customers[i] * (1-grumpy[i]);
        }
        for(int i=0; i<X; i++) {
            xmax +=customers[i] * grumpy[i];
        }
        tmp = xmax;
        for(int i=1; i<n-X+1; i++) {
            tmp = tmp - customers[i-1]*grumpy[i-1] + customers[i+X-1]*grumpy[i+X-1];
            xmax = max(tmp, xmax);
        }
        return xmax+sum;
    }
};