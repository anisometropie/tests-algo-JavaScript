export function makePartialSums(arr, size) {
  const result = []
  for (let i = 0; i < arr.length - size + 1; i++) {
    result[i] = arr.slice(i, i + size).reduce((acc, v) => acc + v)
  }
  return result
}

export function birthdayChocolate(arr, d, m) {
  const partialSums = makePartialSums(arr, m)
  return partialSums.filter(ps => ps === d).length
}
