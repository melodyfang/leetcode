import firstMissingPositive from '../../code/sort/lesson5'

test('firstMissingPositive:[1,2,0]', () => {
  expect(firstMissingPositive([1,2,0])).toBe(3)
})

test('firstMissingPositive2:[3,4,-1,1]', () => {
  expect(firstMissingPositive([3,4,-1,1])).toBe(2)
})