import { diagonalDifference } from './1'

describe('diagonalDifference', () => {
  it('should return diffence', () => {
    expect(diagonalDifference([])).toEqual(0)
    expect(diagonalDifference([[1]])).toEqual(0)
    expect(
      diagonalDifference([
        [1, 2],
        [3, 5]
      ])
    ).toEqual(1)
    expect(
      diagonalDifference([
        [1, 10],
        [3, 5]
      ])
    ).toEqual(7)
    expect(
      diagonalDifference([
        [1, 2, 4],
        [3, 5, 3],
        [3, 5, 3]
      ])
    ).toEqual(3)
  })
})
