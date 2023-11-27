const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const matchmakingRoutes = require('./routes/matchmaking');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/matchmaking', matchmakingRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
