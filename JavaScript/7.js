/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tag = 0, res = 0;
    while(x) {
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
        if(res > Math.pow(2, 31)-1 || res < -Math.pow(2, 31)) {
            return 0;
        }
    }
    return res;
};

//数字翻转 主要考察取整方式

//看题解的时候看到一个很有意思的处理
//对于舍去浮点数小数点后的精度的处理
// Math.floor(x) //舍弃掉这种处理 不适用于负数
// parseInt(x)
// ~~x

parseInt(-2.99) //-2
~~(-2.99) //-2
位运算的效率更高