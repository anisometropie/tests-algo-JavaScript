function pagePosition(p) {
  return Math.floor(p / 2) + 1
}

function solve(n, p) {
  return Math.min(pagePosition(n) - pagePosition(p), pagePosition(p) - 1)
}

module.exports = { solve }

// I considered the position of each page like this:
//
// in a book of 6 pages,
//
// [_1]  [23]  [45]  [6_]
//
// page 1 is in position 1,
// page 2,3 in position 2
// page 4,5 position 3
// page 6 position 4
//
// from start, the number of flip is `pagePosition(p) - 1`
// from end, the number of flip is `pagePosition(n) - pagePosition(p)`
