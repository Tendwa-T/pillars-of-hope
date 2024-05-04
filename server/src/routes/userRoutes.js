const express = require('express');
const {
    createUser,
    loginUser,
    getUsers,
    logoutUser,
    deleteUser
} = require('../controllers/userController');

const authenticateToken = require('../middleware/authentication');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', authenticateToken, getUsers);
router.get('/logout/:id', authenticateToken, logoutUser);
router.delete('/delete/:id', authenticateToken, deleteUser);

module.exports = router;