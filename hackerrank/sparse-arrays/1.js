function sparseArrays(strings, queries) {
  return queries.map(q => strings.filter(s => s === q).length)
}

module.exports = { sparseArrays }
