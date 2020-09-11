import { migratoryBirds } from './1'

describe('migratoryBirds', () => {
  it('should', () => {
    expect(migratoryBirds([1, 2])).toEqual(1)
    expect(migratoryBirds([1, 2, 2])).toEqual(2)
    expect(migratoryBirds([1, 1, 2])).toEqual(1)
    expect(migratoryBirds([1, 2, 3, 3])).toEqual(3)
  })
})
