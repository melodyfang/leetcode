import maximalRectangle from '../../code/stack/lesson2'

test('最大矩形', () => {
  expect(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ])).toBe(6)
})
