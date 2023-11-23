const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user');

require('dotenv').config();

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
	res.send('Hello World!');
});

module.exports = app;
