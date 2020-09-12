function leftRotation(arr, n) {
  return [...arr.slice(n), ...arr.slice(0, n)]
}

module.exports = { leftRotation }
