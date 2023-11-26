function eloRatingUpdate(ratingA, ratingB, ratingC, rankA, rankB, rankC, K = 30) {
    // Helper function to calculate expected score
    function expectedScore(rating1, rating2) {
        return 1 / (1 + Math.pow(10, (rating2 - rating1) / 400));
    }

    // Helper function to calculate new rating
    function newRating(oldRating, actualScore, expectedScore, K) {
        return oldRating + K * (actualScore - expectedScore);
    }

    // Convert ranks to scores
    const scoreA = rankA === 1 ? 1 : (rankA === 2 ? 0.5 : 0);
    const scoreB = rankB === 1 ? 1 : (rankB === 2 ? 0.5 : 0);
    const scoreC = rankC === 1 ? 1 : (rankC === 2 ? 0.5 : 0);

    // Calculate expected scores
    const expectedA_vs_B = expectedScore(ratingA, ratingB);
    const expectedA_vs_C = expectedScore(ratingA, ratingC);
    const expectedB_vs_C = expectedScore(ratingB, ratingC);

    // Update ratings for each comparison
    const ratingChangeA = newRating(ratingA, scoreA, expectedA_vs_B, K) - ratingA +
                          newRating(ratingA, scoreA, expectedA_vs_C, K) - ratingA;

    const ratingChangeB = newRating(ratingB, scoreB, 1 - expectedA_vs_B, K) - ratingB +
                          newRating(ratingB, scoreB, expectedB_vs_C, K) - ratingB;

    const ratingChangeC = newRating(ratingC, scoreC, 1 - expectedA_vs_C, K) - ratingC +
                          newRating(ratingC, scoreC, 1 - expectedB_vs_C, K) - ratingC;

    return {
        newRatingA: ratingA + ratingChangeA / 2,
        newRatingB: ratingB + ratingChangeB / 2,
        newRatingC: ratingC + ratingChangeC / 2
    };
}

module.exports = eloRatingUpdate;