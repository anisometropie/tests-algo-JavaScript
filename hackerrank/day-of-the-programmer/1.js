function dayOfProgrammer(year) {
  const february =
    year === 1918
      ? 15
      : year <= 1917
      ? isJulianLeapYear(year)
        ? 29
        : 28
      : isGregorianLeapYear(year)
      ? 29
      : 28
  const months = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let day = 256
  for (let m = 1; m <= 12; m++) {
    if (day <= months[m - 1]) {
      const monthNumber = String(m).padStart(2, '0')
      return `${day}.${monthNumber}.${year}`
    } else {
      day = day - months[m - 1]
    }
  }
}

function isGregorianLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true
  } else {
    return false
  }
}
function isJulianLeapYear(year) {
  return year % 4 === 0
}

module.exports = { dayOfProgrammer, isGregorianLeapYear, isJulianLeapYear }
