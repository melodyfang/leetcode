/**
 * 621 任务调度器
 * 思路：先执行出现次数最多的任务
 * @see https://leetcode-cn.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
	const Q = {}
	let q = ''
	tasks.forEach(item => {
		if (Q[item]) {
			Q[item]++
		} else {
			Q[item] = 1
		}
	})


	while(1) {
		const keys = Object.keys(Q)
		if (!keys[0]) {
			break
		}
		let tmp = [] // 存储1+n任务单元
		for (let i = 0; i <= n; i++) {
			let max = 0  // 最大次数
			let key // 次数最多任务的key
			let pos // 次数最多任务的位置
			keys.forEach((item, idx) => {
				if (Q[item] > max) {
					max = Q[item]
					key = item
					pos = idx
				}
			})
			if (key) {
				tmp.push(key)
				keys.splice(pos, 1)
				Q[key]--
				if (Q[key] < 1) {
					delete Q[key]
				}
			} else {
				break
			}
		}

		q += tmp.join('').padEnd(n + 1,'-')
	}

	// 边界处理，最后不要出现冷却时间
	q.replace(/-+$/g, '')
	return q.length
};