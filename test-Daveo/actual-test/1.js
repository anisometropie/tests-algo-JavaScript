export function change(cash) {
  let rest = cash
  if (cash >= 2) {
    let ten = 0,
      five = 0,
      two = 0
    if (rest >= 10) {
      ten = Math.floor(rest / 10)
      rest = rest - ten * 10
    }
    if (rest >= 5) {
      five = Math.floor(rest / 5)
      rest = rest - five * 5
    }
    if (rest >= 2) {
      two = Math.floor(rest / 2)
      rest = rest - two * 2
    }
    if (rest === 0) {
      return { two, five, ten }
    }
    // if (cash % 10 === 0) {
    //   return { two: 0, five: 0, ten: cash / 10 }
    // } else if (cash % 5 === 0) {
    //   return { two: 0, five: cash / 5, ten: 0 }
    // } else if (cash % 2 === 0) {
    //   return { two: cash / 2, five: 0, ten: 0 }
    // }
    else {
      return null
    }
  }
  return null
}

module.exports = { change }
