const http = require('http');
const app = require('./src/app');
const { connectDB } = require('./src/config/db');

connectDB();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});