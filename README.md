## 栈
常见问题：括号匹配; 2sum;
# 刷题笔记

## JavaScript
熟悉常用的数据结构及其操作

### Array:
```
let arr = [1,2,3,4] //创建数组
arr.length      //返回数组长度
arr.push(5)     //向数组尾部添加元素
arr.pop()       //删除尾部元素
arr.shift()     //删除数组第一个元素并返回该元素
arr.unshift(11,12,13)   //添加一个或多个元素到数组到开头
arr.reverse()   //数组翻转

```
### String:
```
str.at(index)   //返回该下标对应的字符，若查找失败则返回undefined;如果使用负数，则从字符串末尾开始倒数将找到返回的字符
str.charAt(index)
```

### Map：
`Map.prototype.size` 返回map对象键值对的数量
`Map.prototype.get(key)` 返回key对应的value,不存在则返回undefined
`Map.prototype.set(key, value)` 设置键值对
`Map.prototype.has(key)` 返回一个布尔值说明该key对应的value是否存在
``
Leetcode题号：
[1]()

### LinkList:
```
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
```
Leetcode题号：
[1]()

### Set:
操作类似Map
Leetcode题号：
[3]()

# 动态规划类型题

## 背包问题
[背包九讲](https://www.kancloud.cn/kancloud/pack/70125)

0-1背包
[分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)
完全背包
## 打家劫舍
[打家劫舍 - 1](https://leetcode-cn.com/problems/house-robber/)
[删除获得的点数计算](https://leetcode-cn.com/problems/delete-and-earn/)
[]()


# 常见单词积累
positive integers 正整数