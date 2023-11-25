const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../server');
const { startTransaction, rollbackTransaction } = require('./dbUtils');

describe('Fetch profile Endpoint', () => {
    let client = null;
    let mockJwtVerify;

    beforeAll(async () => {
        mockJwtVerify = jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
            callback(null, { user_id: 1, username: 'testuser1' });
        });
    });

    afterAll(async () => {
        mockJwtVerify.mockRestore();
    });

    beforeEach(async () => {
        client = await startTransaction();
    });

    afterEach(async () => {
        await rollbackTransaction(client);
    });

    // Test for successful fetch
    test('should fetch profile (testuser1) successfully', async () => {
        const response = await supertest(app)
            .get('/api/users/profile/testuser1')
            .set('Authorization', 'Bearer fakeToken')
            .send();

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('username', 'testuser1');
        expect(response.body).toHaveProperty('games_played', 0);
        expect(response.body).toHaveProperty('games_won', 0);
    });

    // Test for successful fetch
    test('should fail fetch profile (user does not exist)', async () => {
        const response = await supertest(app)
            .get('/api/users/profile/userdoesntexist')
            .set('Authorization', 'Bearer fakeToken')
            .send();

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message', 'User not found');
    });
});
