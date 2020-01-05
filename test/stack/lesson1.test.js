import calPoints from '../../code/stack/lesson1'

test('棒球比赛: ["5","2","C","D","+"]', () => {
  expect(calPoints(["5","2","C","D","+"])).toBe(30)
})

test('棒球比赛2: ["5","-2","4","C","D","9","+","+"]', () => {
  expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27)
})