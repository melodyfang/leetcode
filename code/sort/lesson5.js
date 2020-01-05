/**
 * 41. 缺失的第一个正数
 * @see https://leetcode-cn.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 第一种思路
 * 性能不好，如果数字很大，需要遍历n遍
 * @param {*} arr 
 */
// export default function(arr) {
//   var min = 1
//   arr.sort((a, b) => a - b)
//   if (arr[0] > 1) {
//     return 1
//   }
//   function look () {
//     if (arr.includes(min)) {
//       min++
//       look()
//     } else {
//       return min
//     }
//   }
//   look()
//   return min
// };

/**
 * 第2种思路
 * 缺点：并不需要全部排序
 * @param {*} arr 
 */
// export default function(arr) {
//   // 过滤掉非正整数
//   arr = arr.filter(item => item > 0)
//   arr.sort((a, b) => a - b)
//   if (arr[0] !== 1) {
//     return 1
//   }
//   for(let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] > 1) {
//       return arr[i] + 1
//     }
//   }
//   // 说明数组所有元素都是连续的
//   return arr.pop() + 1
// };


/**
 * 第3种思路
 * 使用选择排序
 * @param {*} arr 
 */
export default function(arr) {
  // 过滤掉非正整数
  arr = arr.filter(item => item > 0)
  if (!arr.length) {
    return 1
  }
  let tmp
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }  
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (arr[i] !== 1) {
        return 1
      }
    }
  }
  // 说明数组所有元素都是连续的
  return arr.pop() + 1
};
