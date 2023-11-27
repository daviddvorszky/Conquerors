const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middlewares/authenticateToken');

// User registration route
router.post('/register', async (req, res) => {
	console.log(req.body);
	try {
		const { username, email, password } = req.body;

		// Check if user exists with the same email or username
		const userCheck = await pool.query(
			'SELECT * FROM users WHERE email = $1 OR username = $2',
			[email, username]
		);

		if (userCheck.rows.length > 0) {
			return res.status(400).json({ message: 'Username or email already exists' });
		}

		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Store user in the database
		const newUser = await pool.query(
			'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
			[username, email, hashedPassword]
		);

		res.json(newUser.rows[0]);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// User login route
router.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body;

		// Check if user exists
		const user = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $1', [username]);
		if (user.rows.length === 0) {
			return res.status(400).json({ message: 'Invalid Credentials' });
		}

		// Check password
		const validPassword = await bcrypt.compare(password, user.rows[0].password);
		if (!validPassword) {
			return res.status(400).json({ message: 'Invalid Credentials' });
		}

		// Create and send JWT
		const token = jwt.sign({ user_id: user.rows[0].user_id, username: user.rows[0].username, email: user.rows[0].email, skill_level: user.rows[0].skill_level}, process.env.JWT_SECRET, { expiresIn: '14d' });
		res.json({ token });

	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// User update password route
router.put('/update-password', authenticateToken, async (req, res) => {
	try {
		const { newPassword } = req.body;
		const userId = req.user.user_id;

		// Hash new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);

		// Update password in database
		await pool.query(
			'UPDATE users SET password = $1 WHERE user_id = $2',
			[hashedPassword, userId]
		);

		res.json({ message: 'Password updated successfully' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// GET endpoint to fetch a user's public profile
router.get('/profile/:username', authenticateToken, async (req, res) => {
	try {
		const { username } = req.params;

		const userProfile = await pool.query(
			'SELECT username, games_played, games_won FROM users WHERE username = $1',
			[username]
		);

		if (userProfile.rows.length === 0) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.json(userProfile.rows[0]);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});


module.exports = router;
