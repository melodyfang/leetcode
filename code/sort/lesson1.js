/**
 * 选择排序
 */

[3,5,6,9,1,2]

[1,5,6,9,3,2]

export default (arr) => {
  let idx = 0
  for(let i = 0; i < arr.length; i++) {
    let min = Number.MAX_SAFE_INTEGER
    // 找到这一轮比较的最小值
    for(let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        idx = j
      }
    }
    let tmp = arr[i]
    arr[i] = min
    arr[idx] = tmp
  }
  return arr
}