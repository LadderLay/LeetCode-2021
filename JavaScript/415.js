/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = "";
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let tag = 0;
    while(len1 >= 0 || len2 >= 0) {
        let n1 = len1 >= 0 ? num1[len1]-'0' : 0;
        let n2 = len2 >= 0 ? num2[len2]-'0' : 0;
        let tmp = n1 + n2 + tag;
        tag = Math.floor(tmp / 10);
        res += (tmp % 10).toString();
        len1--; len2--;
    }
    if(tag == 1) res += "1";
    return res.split("").reverse().join("");
};

//没有利用好js特性，直接用数组去存
