function dynamicArray(n, queries) {
  const seqList = [...Array(n)].map(() => [])
  let lastAnswer = 0
  const result = []
  queries.forEach(([type, x, y]) => {
    const seq = seqList[(x ^ lastAnswer) % n]
    if (type === 1) {
      seq.push(y)
    } else if (type === 2) {
      lastAnswer = seq[y % seq.length]
      result.push(lastAnswer)
    }
  })
  return result
}

module.exports = { dynamicArray }
