import { isGregorianLeapYear, isJulianLeapYear, dayOfProgrammer } from './1'

describe('dayOfProgrammer', () => {
  it('should', () => {
    expect(dayOfProgrammer(2017)).toEqual('13.09.2017')
    expect(dayOfProgrammer(1800)).toEqual('12.09.1800')
  })
})
describe('isGregorianLeapYear', () => {
  it('should', () => {
    expect(isGregorianLeapYear(1999)).toEqual(false)
    expect(isGregorianLeapYear(1996)).toEqual(true)
    expect(isGregorianLeapYear(1600)).toEqual(true)
    expect(isGregorianLeapYear(1700)).toEqual(false)
    expect(isGregorianLeapYear(1800)).toEqual(false)
    expect(isGregorianLeapYear(1900)).toEqual(false)
    expect(isGregorianLeapYear(2000)).toEqual(true)
  })
})
describe('isJulianLeapYear', () => {
  it('should', () => {
    expect(isJulianLeapYear(1800)).toEqual(true)
  })
})
