/**
 * 682. 棒球比赛
 * @see https://leetcode-cn.com/problems/baseball-game/
 * @param {string[]} ops
 * @return {number}
 */

/*
  你现在是棒球比赛记录员。
  给定一个字符串列表，每个字符串可以是以下四种类型之一：
  1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
  2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
  3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
  4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

  每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响
*/
// 你需要返回你在所有回合中得分的总和

export default function(arr) {
  let curr = 0 // 当前这一轮的得分
  let res = [] // 存储每一轮的得分
  for(let i = 0; i < arr.length; i++) {
    let len = res.length
    switch(arr[i]) {
      case '+':
        if (len) {
          curr = res[len - 1] + (res[len - 2] || 0)
          res.push(curr)
        }
        break
      case 'D':
        if (len) {
          curr = res[len - 1] * 2
          res.push(curr)
        }
        break
      case 'C':
        if (len) {
          res.pop()
        }
        break
      default:
        res.push(Number(arr[i]))
    }
  }

  return res.reduce((total, num) => total + num)
};