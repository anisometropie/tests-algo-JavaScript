// https://www.hackerrank.com/challenges/sock-merchant/problem

function numPairsInTypedArray(arr) {
  const len = arr.length
  if (len % 2 === 0) {
    return len / 2
  } else {
    return Math.floor(len / 2)
  }
}

function solve(arr) {
  const types = Array.from(new Set(arr))
  return types.reduce((acc, t) => {
    const subArr = arr.filter(s => s === t)
    return acc + numPairsInTypedArray(subArr)
  }, 0)
}

module.exports = { solve }

// O(n^2) ,O(n) is possible
