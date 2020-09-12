import { solve, doQuery } from './1'

describe('doQuery', () => {
  describe('with only one initial interval', () => {
    test('with query interval bounded inside the interval', () => {
      expect(doQuery([{ interval: [1, 10], value: 0 }], [1, 10, 3])).toEqual([
        { interval: [1, 10], value: 3 }
      ])
      expect(doQuery([{ interval: [1, 10], value: 0 }], [1, 5, 3])).toEqual([
        { interval: [1, 5], value: 3 },
        { interval: [6, 10], value: 0 }
      ])
      expect(doQuery([{ interval: [1, 10], value: 0 }], [6, 10, 3])).toEqual([
        { interval: [1, 5], value: 0 },
        { interval: [6, 10], value: 3 }
      ])
      expect(doQuery([{ interval: [1, 10], value: 0 }], [3, 5, 55])).toEqual([
        { interval: [1, 2], value: 0 },
        { interval: [3, 5], value: 55 },
        { interval: [6, 10], value: 0 }
      ])
    })
    test('with query interval not bounded', () => {
      expect(doQuery([{ interval: [1, 10], value: 0 }], [7, 12, 55])).toEqual([
        { interval: [1, 6], value: 0 },
        { interval: [7, 10], value: 55 }
      ])
      expect(doQuery([{ interval: [1, 10], value: 0 }], [-5, 3, 55])).toEqual([
        { interval: [1, 3], value: 55 },
        { interval: [4, 10], value: 0 }
      ])
      expect(doQuery([{ interval: [6, 10], value: 0 }], [1, 5, 33])).toEqual([
        { interval: [6, 10], value: 0 }
      ])
    })
  })
  describe('with only two initial intervals', () => {
    it('should', () => {
      expect(
        doQuery(
          [
            { interval: [1, 5], value: 0 },
            { interval: [6, 10], value: 7 }
          ],
          [1, 5, 3]
        )
      ).toEqual([
        { interval: [1, 5], value: 3 },
        { interval: [6, 10], value: 7 }
      ])
      expect(
        doQuery(
          [
            { interval: [1, 5], value: 0 },
            { interval: [6, 10], value: 7 }
          ],
          [3, 6, 14]
        )
      ).toEqual([
        { interval: [1, 2], value: 0 },
        { interval: [3, 5], value: 14 },
        { interval: [6, 6], value: 21 },
        { interval: [7, 10], value: 7 }
      ])
    })
  })
})

describe('solve', () => {
  it('should', () => {
    expect(
      solve(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100]
      ])
    ).toEqual(200)
  })
})
