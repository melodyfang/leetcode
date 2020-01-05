/**
 * 选择排序
 */

// [3,5,6,9,1,2]

// [1,5,6,9,3,2]

export default (arr) => {
  for(let i = 0; i < arr.length; i++) {
    // 找到这一轮比较的最小值
    for(let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}