const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const API_URL = 'https://api.jsonserve.com/Uw5CrX'; 
const FILE_PATH = path.join(__dirname, 'data.json');

// Serve static files (like data.json)
app.use(express.static(__dirname));

// Fetch data from the API and save to local file
app.get('/fetch-and-save', async (req, res) => {
  try {
    // Fetch API data
    const response = await axios.get(API_URL);
    const data = response.data;
    
    // Save data to local file (data.json)
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
    
    res.send('Data has been fetched and saved to data.json');
  } catch (error) {
    console.error('Error fetching or saving data:', error);
    res.status(500).send('Failed to fetch or save data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
