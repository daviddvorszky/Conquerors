const supertest = require('supertest');
const app = require('..//server');
const { startTransaction, rollbackTransaction } = require('./dbUtils'); // Adjust the path to your dbUtils

describe('Login Endpoint', () => {
    let client = null;
    beforeEach(async () => {
        client = await startTransaction();
    });

    afterEach(async () => {
        await rollbackTransaction(client);
    });

    // Test for successful login
    test('should login successfully with correct credentials', async () => {
        const response = await supertest(app)
            .post('/api/users/login')
            .send({
                username: 'testuser1',
                password: 'password123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    // Test for failed login (wrong password)
    test('should fail login with incorrect credentials', async () => {
        const response = await supertest(app)
            .post('/api/users/login')
            .send({
                username: 'testuser1',
                password: 'wrongpassword'
            });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message', 'Invalid Credentials');
    });
});
