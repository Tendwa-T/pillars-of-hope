require('dotenv').config();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({ userID: user._id, userName: user.name });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: error.message });
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found', authenticated: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials', authenticated: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ userName: user.name, userID: user._id, authenticated: true, token });
    } catch (error) {
        return res.status(500).json({ message: error.message, authenticated: false });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find({
            isActive: true
        }, { password: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function logoutUser(req, res) {
    try {
        const user = await User.findById(req.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 20 })
        return res.status(200).json({ message: 'Logout successful', authenticated: false, token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isActive: false });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { createUser, loginUser, getUsers, logoutUser, deleteUser };