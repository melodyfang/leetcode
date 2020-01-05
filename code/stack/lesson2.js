/**
 * 85. 最大矩形
 * @see https://leetcode-cn.com/problems/maximal-rectangle/
 * @param {character[][]} matrix
 * @return {number}
 */

// 自己写法
// var maximalRectangle = function(arr) {
//     const res = []
//     if (!arr.length) {
//         return 0
//     }
//     for(let i = 0; i < arr.length; i++) {
//         const flatArr = arr[i]
//         let tmp = []
//         for(let j = 0; j < flatArr.length; j++) {
//             const item = flatArr[j]
//             if (item == 1) {
//                 tmp.push(j)
//             } else {
//                 tmp.length = 0
//             }
//         }
//         const copy = tmp.slice()
//         if (copy.length > 1) {
//             const dest = [copy[0], copy[copy.length - 1]]
//             res.push(dest)
//         }
//     }

//     // 求交集
//     let dest = []
//     let max1 = 0
//     let max2 = 0
//     let x = 1
//     let y = 1
//     for(let i = 0; i < res.length - 1; i++) {
//         if (max1 < Math.abs(res[i + 1][0] - res[i][0])) {
//             max1 = Math.abs(res[i + 1][0] - res[i][0])
//         } else if (res[i + 1][0] - res[i][0]) {
//             max1 = res[i + 1][0]
//         }


//         if (max2 < Math.abs(res[i + 1][1] - res[i][1])) {
//             max2 = Math.abs(res[i + 1][1] - res[i][1])
//         } else if (res[i + 1][1] === res[i][1]) {
//             max2 = res[i + 1][1]
//         }
//         dest = [max1, max2]
//         x = max2 - max1 + 1
//         y = res.length
//     }
    
//     return x * y
// };


/**
 * 使用正则
 */
export default (arr) => {
    let result = []
    let reg = /1{2,}/g
    // 把相邻的1提取出来（起始点 + 截止点）
    arr = arr.map(item => {
        let str = item.join('')
        let r = reg.exec(str)
        let rs = []
        while(r) {
            rs.push([r.index, r.index + r[0].length - 1])
            r = reg.exec(str)
        }
        return rs
    })

    // 通过递归阶段相邻的矩阵
    let maxRect = (arr, result, n = 1) => {
        let top = arr.pop() // 弹出第一行
        let next = arr.pop() // 弹出第2行
        let tt  // 记录第1行每一个起始点和截止点
        let nn  // 记录第2行每一个起始点和截止点
        let start   // 记录交叉的起始索引
        let end     // 记录交叉的截至索引
        let width = 1
        let maxWidth = 1
        n++
        for (let i = 0; i < top.length; i++) {
            tt = top[i]
            for (let j = 0; j < next.length; j++) {
                nn = next[j]
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
                if (width > maxWidth) {
                    maxWidth = width
                    start = Math.max(tt[0], nn[0])
                    end = Math.min(tt[1], nn[1])
                }
            }
        }

        // 如果没有找到交叉点
        if (start === undefined || end === undefined) {
            if (n < 3) {
               return false 
            } else {
                width = top[0][1] - top[0][0] + 1
                if (width > 1) {
                    result.push((n - 1) * width)
                }
            }
        } else {
            arr.push([[start, end]])
            maxRect(arr, result, n++)
        }
    }

    while (arr.length > 1) {
        maxRect([].concat(arr), result)
        arr.pop()
    }

    // 取最大值
    let max = 0
    let item = result.pop()
    while(item) {
        if (item > max) {
            max = item
        }
        item = result.pop()
    }

    return max > 0 ? max : -1
}
