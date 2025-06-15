const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
// const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// // Serve static files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true,  
// }));
app.use(express.json());
app.use(cookieParser());

// Routes
router(app)

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});