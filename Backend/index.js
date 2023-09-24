// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
mongoose.connect('mongodb://0.0.0.0:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true });



// ................models........................
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String // "user" or "vendor"
});

const User = mongoose.model('User', userSchema);

// .............Product.models............
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    status: String // "pending", "approved", "rejected"
});

const Product = mongoose.model('Product', productSchema);

//,............Order models...................................
const orderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    productIds: [mongoose.Schema.Types.ObjectId],
    status: String // "ordered", "shipped", "delivered"
});

const Order = mongoose.model('Order', orderSchema);




const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ... Other code ...

// routes/user.js
app.post('/register', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            username,
            password: hashedPassword,
            role
        });
        await user.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// ... Other routes ...


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        res.status(500).send('Server error');
    }
});




app.post('/addProduct', async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const product = new Product({
            name,
            description,
            price,
            status: 'pending'  // default status
        });

        await product.save();

        res.status(201).send('Product added successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});





app.post('/reviewProduct/:productId', async (req, res) => {
    try {
        const { status } = req.body; // "approved" or "rejected"
        const { productId } = req.params;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        product.status = status;
        await product.save();

        res.send('Product reviewed successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});







app.post('/orderProduct', async (req, res) => {
    try {
        const { userId, productIds } = req.body; // Array of product IDs

        const order = new Order({
            userId,
            productIds,
            status: 'ordered' // Default status
        });

        await order.save();
        res.status(201).send('Order placed successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});





app.get('/trackOrder/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findById(orderId).populate('productIds');
        if (!order) {
            return res.status(404).send('Order not found');
        }

        res.json(order);
    } catch (error) {
        res.status(500).send('Server error');
    }
});




app.listen(3000, () => {
    console.log('Server started on port 3000');
});