"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Endpoint untuk register user
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Logika untuk register user
    res.send('User registered');
});
// Endpoint untuk login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logika untuk login user
    res.send('User logged in');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// Endpoint untuk menambah produk
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    // Logika untuk menambah produk
    res.send('Product added');
});
// Endpoint untuk mendapatkan semua produk
app.get('/products', (req, res) => {
    // Logika untuk mendapatkan semua produk
    res.send('List of products');
});
// Endpoint untuk membuat order
app.post('/orders', (req, res) => {
    const { productId, quantity } = req.body;
    // Logika untuk membuat order
    res.send('Order created');
});
// Endpoint untuk mendapatkan semua order
app.get('/orders', (req, res) => {
    // Logika untuk mendapatkan semua order
    res.send('List of orders');
});
