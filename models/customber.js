const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customer_id: {
        type: String
    }, customer_name: {
        type: String
    }, email: {
        type: String
    }, balance: {
        type: Number
    }
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer