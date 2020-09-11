import { birthdayChocolate, makePartialSums } from './1'

describe('birthdayChocolate', () => {
  it('should match segment summing to d and of length m', () => {
    // expect(birthdayChocolate([_], d, m)).toEqual(2)
    expect(birthdayChocolate([1, 2], 3, 2)).toEqual(1)
    expect(birthdayChocolate([1, 3], 3, 2)).toEqual(0)
    expect(birthdayChocolate([1, 2, 1], 3, 2)).toEqual(2)
    expect(birthdayChocolate([1, 2, 1], 4, 3)).toEqual(1)
  })
})

describe('makePartialSums', () => {
  it('shou', () => {
    expect(makePartialSums([1, 2, 3, 4], 2)).toEqual([3, 5, 7])
    expect(makePartialSums([1, 2, 3, 4, 5], 2)).toEqual([3, 5, 7, 9])
    expect(makePartialSums([1, 2, 3, 4, 5], 3)).toEqual([6, 9, 12])
  })
})
