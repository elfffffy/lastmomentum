const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

require('dotenv').config();
const apiKey = process.env.API_KEY;

app.get('/weather', (req, res) => {
  res.json({ apiKey });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });