export function divisibleSumPairs(arr, k) {
  let count = 0
  arr.forEach((n, i) => {
    arr.slice(i + 1).forEach(m => {
      if ((n + m) % k === 0) {
        count++
      }
    })
  })
  return count
}
