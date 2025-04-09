
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// API for /language
app.get('/language', (req, res) => {
  res.sendFile(path.join(__dirname, 'mocks', 'language.json'));
});

// API for /users
app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'mocks', 'users.json'));
});

// Start the server
app.listen(port, () => {
  console.log(`Mock server started on: http://localhost:${port}`);
});