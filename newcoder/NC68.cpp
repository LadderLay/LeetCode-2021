//青蛙跳台阶，比较基础的递归问题
class Solution {
public:
    int jumpFloor(int number) {
        if(number==1 || number==0)
            return 1;
        else 
            return jumpFloor(number-1)+jumpFloor(number-2);
    }
};