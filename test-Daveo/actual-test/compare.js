export const compare = (a, b) => {
  if (a < 0 && b < 0) {
    return Math.max(a, b)
  } else if (a < 0 && b > 0) {
    const absA = Math.abs(a)
    const absB = Math.abs(b)
    if (absA < absB) {
      return a
    } else {
      return b
    }
  } else if (a > 0 && b < 0) {
    const absA = Math.abs(a)
    const absB = Math.abs(b)
    if (absA > absB) {
      return b
    } else {
      return a
    }
  }
  return Math.min(a, b)
}

export function computeClosestToZero(ts) {
  if (ts.length === 0) {
    return 0
  }
  return ts.reduce((acc, v) => {
    return compare(acc, v)
  }, ts[0])
}
