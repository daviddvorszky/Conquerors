const pool = require('../db');
const bcrypt = require('bcrypt');

async function truncateTables() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

async function seedUsersTable() {
    const salt = await bcrypt.genSalt(10);
	
    // testuser1
    await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        ["testuser1", "testuser1@test.com", await bcrypt.hash("password123", salt)]
    );

    // testuser2
    await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        ["testuser2", "testuser2@test.com", await bcrypt.hash("password123", salt)]
    );

    // testuser3
    await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        ["testuser3", "testuser3@test.com", await bcrypt.hash("password123", salt)]
    );
}

async function startTransaction() {
  const client = await pool.connect();
  await client.query('BEGIN');
  return client;
}

async function rollbackTransaction(client) {
  if (client) {
    await client.query('ROLLBACK');
    client.release();
  }else {
    console.log("No client?");
  }
}


module.exports = {
  truncateTables,
  seedUsersTable,
  startTransaction,
  rollbackTransaction
};
