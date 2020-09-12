function doQuery(array, [leftBound, rightBound, added]) {
  if (array.length > 1) {
    const result = array.map(curInterval =>
      doQuery([curInterval], [leftBound, rightBound, added])
    )
    return [].concat(...result)
  } else {
    const { interval, value } = array[0]
    const newArray = []
    if (rightBound < interval[0] || interval[1] < leftBound) {
      return array
    }
    if (interval[0] < leftBound) {
      // query left bound is inside
      newArray.push({ interval: [interval[0], leftBound - 1], value })
      if (rightBound < interval[1]) {
        newArray.push(
          { interval: [leftBound, rightBound], value: value + added },
          { interval: [rightBound + 1, interval[1]], value: value }
        )
      } else {
        newArray.push({
          interval: [leftBound, interval[1]],
          value: value + added
        })
      }
    } else {
      // query left bound is completely to the left
      if (rightBound < interval[1]) {
        newArray.push(
          {
            interval: [interval[0], rightBound],
            value: value + added
          },
          {
            interval: [rightBound + 1, interval[1]],
            value: value
          }
        )
      } else {
        newArray.push({
          interval: [interval[0], interval[1]],
          value: value + added
        })
      }
    }
    return newArray
  }
}

function solve(n, queries) {
  let array = [{ interval: [1, n], value: 0 }]
  queries.forEach(q => {
    array = doQuery(array, q)
  })
  return Math.max(...array.map(i => i.value))
}

module.exports = { solve, doQuery }
