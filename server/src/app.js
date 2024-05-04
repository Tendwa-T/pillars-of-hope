const path = require('path');
const express = require('express');
const cors = require('cors');
const defaultRoute = require('./routes/defaultRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', defaultRoute);
app.use('/user', userRoute);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});



module.exports = app;