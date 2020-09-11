export function findRank(leaderboard, aliceScore, previousRank = Infinity) {
  let curRank = Math.min(previousRank - 1, leaderboard.length)
  while (aliceScore >= leaderboard[curRank - 1]) {
    curRank--
  }
  return curRank + 1
}

export function climbingLeaderboard(leaderboard, aliceScores) {
  const uniqueScores = Array.from(new Set(leaderboard))
  const result = []
  for (let i = 0; i < aliceScores.length; i++) {
    result[i] = findRank(uniqueScores, aliceScores[i], result[i - 1])
  }

  return result
}
