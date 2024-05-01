const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});



module.exports = app;