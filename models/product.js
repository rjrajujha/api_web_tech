const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Product_id: {
        type: String
    }, Product_type: {
        type: String
    }, Product_name: {
        type: String
    }, Product_price: {
        type: Number
    }, Available_quantity: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product