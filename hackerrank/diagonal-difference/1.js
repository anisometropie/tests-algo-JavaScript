export function diagonalDifference(arr) {
  const n = arr.length
  if (n <= 1) {
    return 0
  }
  const topLeftDiag = arr.reduce((acc, row, i) => acc + row[i], 0)
  const topRightDiag = arr.reduce((acc, row, i) => acc + row[n - 1 - i], 0)
  return Math.abs(topLeftDiag - topRightDiag)
}
