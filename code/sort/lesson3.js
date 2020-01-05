/**
 * 按奇偶排序
 * @see https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @param {number[]} A
 * @return {number[]}
 */

// 方案一
// export default function(arr) {
//   const jishu = []
//   const oushu = []
//   const res = []
//     for(let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         oushu.push(arr[i])
//       } else {
//         jishu.push(arr[i])
//       }
//     }
   
//     for(let i = 0; i < jishu.length; i++) {
//       res.push(oushu[i])
//       res.push(jishu[i])
//     }
//     return res
// };

// 方案2
export default function(arr) {
  let odd = 1
  let even = 0
  const res = []
  arr.forEach(item => {
    if (item % 2 === 1) {
      res[odd] = item
      odd += 2
    } else {
      res[even] = item
      even += 2
    }
  })
  return res
};