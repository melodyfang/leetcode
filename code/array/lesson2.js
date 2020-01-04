/** 卡牌分组
 * @see https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @param {number[]} deck
 * @return {boolean}
 */
export default (arr) => {
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let dest = []
    let result = true
    for (let i = 0, tmp = []; i < arr.length; i++) {
      tmp.push(arr[i])
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[i] === arr[j]) {
          tmp.push(arr[j])
        } else {
          if (min > tmp.length) {
            min = tmp.length
          }
          dest.push([].concat(tmp))
          tmp.length = 0
          i = j
          break
        }
      }
    }

    dest.every(item => {
      if (item.length % min !== 0) {
        result = false
        return false
      }
    })
    return result
};
