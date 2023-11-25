const supertest = require('supertest');
const app = require('..//server');
const { startTransaction, rollbackTransaction } = require('./dbUtils');

describe('Register Endpoint', () => {
    let client = null;
    beforeEach(async () => {
        client = await startTransaction();
    });

    afterEach(async () => {
        await rollbackTransaction(client);
    });

    // Test for successful register
    test('should register successfully', async () => {
        const response = await supertest(app)
            .post('/api/users/register')
            .send({
                username: 'regtest1',
                email: 'regtest1@test.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('user_id');
        expect(response.body).toHaveProperty('username', 'regtest1');
        expect(response.body).toHaveProperty('email', 'regtest1@test.com');
        expect(response.body).toHaveProperty('password');
        expect(response.body).toHaveProperty('games_played', 0);
        expect(response.body).toHaveProperty('games_won', 0);
        expect(response.body).toHaveProperty('skill_level', 1200);
        expect(response.body).toHaveProperty('created_at');
        expect(response.body).toHaveProperty('updated_at');
    });

    // Test for failed register (username already exists)
    test('should fail register (already exists)', async () => {
        const response = await supertest(app)
            .post('/api/users/register')
            .send({
                username: 'testuser1',
                password: 'password123'
            });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message', 'Username or email already exists');
    });
});
