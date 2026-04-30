require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';

app.use(cors());
app.use(express.json());

// Get NEO Feed
app.get('/api/feed', async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    
    let url = `${BASE_URL}/feed?api_key=${API_KEY}`;
    if (start_date) url += `&start_date=${start_date}`;
    if (end_date) url += `&end_date=${end_date}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching NEO feed:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

// Browse NEOs
app.get('/api/browse', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/neo/browse?api_key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error browsing NEOs:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
