/**
 * 反转字符串中的单词
 * @see https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */

export function reverseWords (s) {
  const arr = s.split(' ')
  const dest = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return dest.join(' ')
}

// 第二种方式，使用正则
// export function reverseWords (s) {
//   const arr = s.split(/\s/g)
//   const dest = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return dest.join(' ')
// }

// 第二种方式，使用match
// export function reverseWords (s) {
//   const arr = s.match(/[\w']+/g)
//   const dest = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return dest.join(' ')
// }