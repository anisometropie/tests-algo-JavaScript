import { divisibleSumPairs } from './1'

describe('divisibleSumPairs', () => {
  it('should match segment summing to d and of length m', () => {
    expect(divisibleSumPairs([1, 2], 3)).toEqual(1)
    expect(divisibleSumPairs([1, 2, 3, 3], 3)).toEqual(2)
  })
})
