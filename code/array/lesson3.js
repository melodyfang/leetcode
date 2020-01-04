/**
 * 605种花问题
 * @see https://leetcode-cn.com/problems/can-place-flowers/
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
 */
export default function(arr, n) {
    let max = 0
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 0) {
        if (i === 0 && arr[1] === 0) {
          max++
          i++
        } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
          max++
          i++
        }
      }
    }
    if (n <= max) {
      return true
    } else {
      return false
    }
};