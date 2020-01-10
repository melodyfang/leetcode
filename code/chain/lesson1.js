/**
 * 148 排序链表
 * 该示例使用快速排序解决
 * 实际上应该使用堆排序解决此题
 * @see https://leetcode-cn.com/problems/sort-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 声明一个链表的节点
class Node {
  constructor (value) {
    this.val = value
    this.next
  }
}

// 声明链表的数据结构
class NodeList {
  constructor (arr) {
    // 链表的头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

// 交换两个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 寻找基准元素的节点
let portion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while(q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 让基准元素跑到中间位置
  swap(p, begin)
  return p
}

export default function sort (begin, end) {
  if (begin !== end) {
    let part = portion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export {
  Node,
  NodeList
}
