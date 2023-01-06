const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000
const DBURL = process.env.MONOGDB_URL;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//MongoDB Schema
const Order = require('./models/order');
const Product = require('./models/product');
const Customer = require('./models/customber');

const client = mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })

client.then((res) => {
    console.log("Connected to DataBase");
}).catch((e) => {
    console.log(`Error ${e}`)
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//----------------------------------------------------------------------------------------------------

app.post('/orders', async (req, res) => {
    await Order.insertMany(req.body);
    console.log(req.body);
    res.end()
})

app.post('/product', async (req, res) => {
    await Product.insertMany(req.body);
    res.end()
})

app.post('/customer', async (req, res) => {
    await Customer.insertMany(req.body);
    res.end()
})


app.get('/orders/:id', async (req, res) => {
    try {
        let data = await Order.find({ customer_id: req.params.id });
        res.status(200).json(data);
        res.end();
    }
    catch (e) {
        if (e) {
            console.log(`Error ${e}`);
        }
    }
})

app.get('/product/:id', async (req, res) => {
    try {
        let data = await Product.find({ Product_id: req.params.id });
        res.status(200).json(data);
        res.end();
    }
    catch (e) {
        if (e) {
            console.log(`Error ${e}`);
        }
    }
})

app.get('/customer/:id', async (req, res) => {
    try {
        let data = await Customer.find({ customer_id: req.params.id });
        res.status(200).json(data);
        res.end();
    }
    catch (e) {
        if (e) {
            console.log(`Error ${e}`);
        }
    }
})

app.get('/product/:type', async (req, res) => {
    try {
        let data = await Product.find({ customer_id: req.params.type });
        res.status(200).json(data);
        res.end();
    }
    catch (e) {
        if (e) {
            console.log(`Error ${e}`);
        }
    }
})

app.get('/inventory', async (req, res) => {
    try {
        let data = await Order.find({});
        res.status(200).json(data);
        res.end();
    }
    catch (e) {
        if (e) {
            console.log(`Error ${e}`);
        }
    }
})
//---------------------------------------------
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
})