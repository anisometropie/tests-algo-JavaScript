import { computeClosestToZero, compare } from './1'

describe('computeClosestToZero', () => {
  it('should return zero if ts is empty', () => {
    expect(computeClosestToZero([])).toEqual(0)
  })
  it('should return closest to zero', () => {
    expect(computeClosestToZero([1])).toEqual(1)
    expect(computeClosestToZero([2, 3])).toEqual(2)
    expect(computeClosestToZero([-2, 1])).toEqual(1)
    expect(computeClosestToZero([-2, 2])).toEqual(2)
    expect(computeClosestToZero([-10, -11])).toEqual(-10)
    expect(computeClosestToZero([-10, 10])).toEqual(10)
    expect(computeClosestToZero([10, -10])).toEqual(10)
    expect(computeClosestToZero([10, -10, 9, -9])).toEqual(9)
  })
})

describe('compare', () => {
  it('should return closest to zero', () => {
    expect(compare(1, 2)).toEqual(1)
    expect(compare(-1, -2)).toEqual(-1)
    expect(compare(-1, 2)).toEqual(-1)
    expect(compare(-2, 1)).toEqual(1)
    expect(compare(1, -2)).toEqual(1)
    expect(compare(2, -1)).toEqual(-1)
    expect(compare(-1, 1)).toEqual(1)
  })
})
