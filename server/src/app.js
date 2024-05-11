require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const defaultRoute = require('./routes/defaultRoutes');
const userRoute = require('./routes/userRoutes');
const cloudinary = require('cloudinary');
const multer = require('multer')
const eventRoute = require('./routes/eventRoutes');

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
})

async function uploadImage(imagePath) {
    const option = {
        use_filename: true,
        unique_filename: true,
        overwrite: true,
    }

    try {
        const result = await cloudinary.uploader.upload(imagePath, option)
        console.log(result)
        return result.url;
    } catch (error) {
        console.log(error)
    }
}

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Only jpg, jpeg and png formats allowed"))
        }
        cb(undefined, true)
    }
})

const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/api/', defaultRoute);
app.use('/api/user', userRoute);
app.use('/api/events', eventRoute);
app.post('/api/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file to upload" })
    }
    try {
        const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
        const result = await cloudinary.uploader.upload(dataUri, {
            folder: '/pillars-of-hope',
            resource_type: 'auto',
            use_filename: true,
            overwrite: true,
        })

        return res.json({ url: result.secure_url })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'admin.html'));
})



module.exports = app;