function nbSightings(arr, n) {
  return arr.filter(type => type === n).length
}

export function migratoryBirds(arr) {
  const sightings = arr.reduce((acc, v) => {
    if (!Reflect.has(acc, v)) {
      return { ...acc, [v]: nbSightings(arr, v) }
    } else {
      return acc
    }
    return
  }, {})
  console.log(sightings)
  const maxNbSigthings = Math.max(...Object.values(sightings))
  const typeWithMaxNumberOfSightings = Object.entries(sightings).filter(
    s => s[1] === maxNbSigthings
  )
  return parseInt(typeWithMaxNumberOfSightings[0][0])
}
