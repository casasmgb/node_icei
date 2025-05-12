const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Base de datos en memoria (simulación)
let products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 }
];

// GET (Todos los productos)
app.get('/api/products', (req, res) => {
    res.json(products);
});

// GET (Producto por ID)
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
});

// POST (Crear producto)
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT (Actualizar producto)
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json(product);
});

// DELETE (Eliminar producto)
app.delete('/api/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).json({ error: 'Producto no encontrado' });

    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct[0]);
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});

module.exports = app;
