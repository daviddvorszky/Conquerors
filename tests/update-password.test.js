const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('..//server');
const { startTransaction, rollbackTransaction } = require('./dbUtils');

describe('Update-password Endpoint', () => {
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

    // Test for successful update
    test('should update password successfully', async () => {
        const response = await supertest(app)
            .put('/api/users/update-password')
            .set('Authorization', 'Bearer fakeToken')
            .send({
                newPassword: 'updatedPassword'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Password updated successfully');
    });
});
