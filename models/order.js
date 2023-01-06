const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customer_id: {
        type: String
    }, inventory_id: {
        type: String
    }, item_name: {
        type: String
    }, quantity: {
        type: Number
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order