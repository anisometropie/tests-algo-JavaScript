import { leftRotation } from './1'

test('leftRotation', () => {
  expect(leftRotation([1, 2], 1)).toEqual([2, 1])
  expect(leftRotation([1, 2, 3], 1)).toEqual([2, 3, 1])
  expect(leftRotation([1, 2, 3], 2)).toEqual([3, 1, 2])
})
