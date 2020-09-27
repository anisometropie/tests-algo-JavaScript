import { solve } from './1'

test('solve', () => {
  expect(solve(1, 1)).toEqual(0)
  expect(solve(3, 2)).toEqual(0)
  expect(solve(3, 3)).toEqual(0)

  expect(solve(5, 1)).toEqual(0)
  expect(solve(5, 2)).toEqual(1)
  expect(solve(5, 3)).toEqual(1)
  expect(solve(5, 4)).toEqual(0)
  expect(solve(5, 5)).toEqual(0)

  expect(solve(6, 5)).toEqual(1)
})
