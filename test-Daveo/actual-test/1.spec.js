import { change } from './1'

test('change', () => {
  expect(change(1)).toEqual(null)
  expect(change(2)).toEqual({ two: 1, five: 0, ten: 0 })
  expect(change(4)).toEqual({ two: 2, five: 0, ten: 0 })
  expect(change(5)).toEqual({ two: 0, five: 1, ten: 0 })
  expect(change(10)).toEqual({ two: 0, five: 0, ten: 1 })
  expect(change(12)).toEqual({ two: 1, five: 0, ten: 1 })
  expect(change(15)).toEqual({ two: 0, five: 1, ten: 1 })
  expect(change(107)).toEqual({ two: 1, five: 1, ten: 10 })
  expect(change(10107)).toEqual({ two: 1, five: 1, ten: 1010 })
})
