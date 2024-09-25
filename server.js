require('dotenv').config();

const express = require('express');
const app = express();

const apiKey = process.env.API_KEY;

app.get('/weather', (req, res) => {
  res.json({ apiKey });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });