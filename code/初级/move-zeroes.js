/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 说明:
  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。
 * 
 */


/**
 * 第一种思路，使用一个变量 j 去进行记录, 对当前数组对元素重新进行赋值
 */

var arr = [0, 8, 9, 0, 3]

let j = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[j] = arr[i]
    j++
  }
}

for (let i = j; i < arr.length; i++) {
  arr[i] = 0  
}

/**
 * 第二种思路，通过元素交换，不稳定
 * 假设第一个元素为0，然后依次遍历数组内的元素，如果当前元素大于0，zi++
 * 当遇到当前元素是0的时候，zi就不加
 * 交换两个元素
 */

var zi = 0 // 假设为0元素的下标是0
let tmp

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    tmp = arr[i]
    arr[i] = arr[zi]
    arr[zi] = tmp
    zi++
  }
}

console.log(arr)
