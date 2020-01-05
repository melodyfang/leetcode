/**
 * 215. 数组中的第K个最大元素
 * @see https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * 使用sort方法，执行用时短，内容消耗大
 * 执行用时 : 84 ms
 * 内存消耗 : 36.5 MB
 * @param {*} arr 
 * @param {*} k 
 */
// export default function (nums, k) {
//     nums.sort((a, b) => b - a)
//     return nums[k - 1]
// };

// 第二种：使用冒泡排序：性能高
// export default function (arr, k) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     count++
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = tmp
//       }
//     }
//   }
//   if (count >= k) {
//     return arr[arr.length - k]
//   }
// };

/**
 * 
 * 使用冒泡排序，执行用时长，内容消耗小
 * 执行用时 : 124 ms
 * 内存消耗 : 34.7 MB
 * @param {*} arr 
 * @param {*} k 
 */
export default function (arr, k) {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
};