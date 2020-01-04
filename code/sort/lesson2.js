/**
 * 164. 最大间距
 * @see https://leetcode-cn.com/problems/maximum-gap/
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 */

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。

export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  arr.sort((a, b) => a - b)
  for(let i = 0; i < arr.length; i++) {
    const delta = arr[i + 1] - arr[i]
    let max = Number.MIN_SAFE_INTEGER
    if (max < delta) {
      max = delta
    }
  }
}

