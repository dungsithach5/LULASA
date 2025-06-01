const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// const path = require('path');
const productRoute = require('./routes/ProductRoute.js');
const categoryRoute = require('./routes/CategoryRoute.js');
const orderRoute = require('./routes/OrderRoute.js');
const contactRoute = require('./routes/ContactRoute.js');
const reviewRoute = require('./routes/ReviewRoute.js');
const productImageRoute = require('./routes/ProductImageRoute.js');

dotenv.config();

const app = express();
const PORT = 3000;

// // Serve static files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/orders', orderRoute);
app.use('/api/contacts', contactRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/productimages', productImageRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});