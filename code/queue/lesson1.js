/**
 * 622 设计循环队列
 * @see https://leetcode-cn.com/problems/design-circular-queue/
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */

class MyCircularQueue {
  constructor (k) {
    this.list = new Array(k)
    this.front = 0 // 队首指针
    this.rear = 0 // 队尾指针
    this.max = k // 队列队长度
  }

  enQueue (num) {
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = num
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }

  deQueue () {
    let v = this.list[this.front]
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return v
  }

  isEmpty () {
    return this.front === this.rear && !this.list[this.front]
  }

  isFull () {
    return this.front === this.rear && !!this.list[this.front]
  }

  Front () {
    return this.list[this.front]
  }

  Rear () {
    let rear = this.rear - 1
    if (rear < 0) {
      rear = this.max - 1
    }
    return this.list[rear]
  }
}


/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


export default MyCircularQueue