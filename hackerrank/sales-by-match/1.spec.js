import { solve } from './1'

test('solve', () => {
  expect(solve([])).toEqual(0)
  expect(solve([1])).toEqual(0)
  expect(solve([1, 1])).toEqual(1)
  expect(solve([1, 1, 1])).toEqual(1)
  expect(solve([1, 1, 1, 2, 2])).toEqual(2)
  expect(solve([1, 1, 1, 2, 2, 3, 3, 3])).toEqual(3)
  expect(solve([1, 1, 1, 2, 2, 3, 3, 3, 3])).toEqual(4)
  expect(solve([1, 2, 1, 2, 1, 3, 3, 3, 3])).toEqual(4)
})
