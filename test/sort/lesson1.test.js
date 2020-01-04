import sort from '../../code/sort/lesson1'

test('选择排序: [3,5,6,9,1,2]', () => {
  expect(sort([3,5,6,9,1,2])).toEqual([1, 2, 3, 5, 6, 9])
})