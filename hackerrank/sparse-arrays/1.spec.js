import { sparseArrays } from './1'

test('sparseArrays', () => {
  expect(sparseArrays([], ['a'])).toEqual([0])
  expect(sparseArrays(['a'], ['a'])).toEqual([1])
  expect(sparseArrays(['a', 'a', 'b'], ['a'])).toEqual([2])
  expect(sparseArrays(['a', 'a', 'b'], ['a', 'b'])).toEqual([2, 1])
})
