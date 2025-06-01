const productRouter = require('../routes/ProductRoute');
const categoryRouter = require('../routes/CategoryRoute');
const orderRouter = require('../routes/OrderRoute');
const contactRouter = require('../routes/ContactRoute');
const reviewRouter = require('../routes/ReviewRoute');
const productImageRouter = require('../routes/ProductImageRoute')


module.exports = (app) => {
    app.use('/api/products', productRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/orders', orderRouter);
    app.use('/api/contacts', contactRouter);
    app.use('/api/reviews', reviewRouter);
    app.use('/api/productimages', productImageRouter);
}