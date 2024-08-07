// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 9008;

app.use(cors()); // Enable CORS

app.get('/get', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
