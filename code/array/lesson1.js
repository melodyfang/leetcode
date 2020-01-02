/**
 * 17 电话号码的字母组合
 * @see https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

function compose (arr) {
  let tmp = []
  const s1 = arr[0]
  const s2 = arr[1]
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      tmp.push(s1[i] + s2[j])
    }
  }
  arr.splice(0, 2, tmp)
  if (arr.length > 1) {
    compose(arr)
  } else {
    return tmp
  }
  return arr[0]
}

export function letterCombinations (digits) {
  const dict = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const res = []
  let dest = []

  const words = []

  for (let i = 0; i < digits.length; i++) {
    for (let key in dict) {
      if (digits[i] === key) {
        const val = dict[key]
        res.push(val)
      }
    }
  }

  dest = compose(res)

  console.log(dest)

  return dest
}; 

letterCombinations('23')