const express = require('express');
const bodyParser = require ('body-parser');
// import cors from 'cors';
const dotenv = require('dotenv');
// const router = require('./routes/index.js');
// const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// // Serve static files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(bodyParser.json());

// Routes
// router(app);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});