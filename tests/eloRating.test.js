const eloRatingUpdate = require('../utils/eloRating');

describe('ELO Rating Update', () => {
  test('should correctly update ratings for a typical game', () => {
    const result = eloRatingUpdate(1500, 1500, 1500, 1, 2, 3);
    
    console.log(result)

    expect(result.newRatingA).toBeGreaterThan(1500);
    expect(result.newRatingB).toBe(1500);
    expect(result.newRatingC).toBeLessThan(1500);
  });


});
