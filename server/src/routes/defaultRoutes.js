const express = require('express');

const router = express.Router();
router.get('/api', (req, res) => {
    return res.json({ message: 'Hello from server!' });
});

module.exports = router;