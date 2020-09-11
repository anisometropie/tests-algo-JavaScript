import { findRank, climbingLeaderboard } from './1'

describe('findRank', () => {
  it('should', () => {
    expect(findRank([100], 50)).toEqual(2)
    expect(findRank([100], 200)).toEqual(1)
    expect(findRank([100, 50], 75)).toEqual(2)
    expect(findRank([100, 50], 50)).toEqual(2)
    expect(findRank([100, 50, 40, 30], 75)).toEqual(2)
    expect(findRank([100, 50, 40, 30], 10)).toEqual(5)
    expect(findRank([100, 50, 40, 30], 20, 5)).toEqual(5)
    expect(findRank([100, 50, 40, 30], 30, 5)).toEqual(4)
    expect(findRank([100, 50, 40, 30], 40, 4)).toEqual(3)
    expect(findRank([100, 50, 40, 30], 60, 3)).toEqual(2)
  })
})

describe('climbingLeaderboard', () => {
  it('should', () => {
    expect(
      climbingLeaderboard([100, 50, 40, 30], [10, 20, 30, 40, 60, 120])
    ).toEqual([5, 5, 4, 3, 2, 1])
  })
})
