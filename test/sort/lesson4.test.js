import findKthLargest from '../../code/sort/lesson4'

test('findKthLargest:[3,2,1,5,6,4]', () => {
  expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
})

test('findKthLargest2:[3,2,3,1,2,4,5,5,6]', () => {
  expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
})