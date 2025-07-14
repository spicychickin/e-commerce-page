// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to handle JSON bodies
app.use(express.json());
app.use(cors()); // Enable CORS for all requests

// Sample cart data
let cart = [
  // Sample cart item (this can be updated dynamically)
  {
    id: 1,
    name: 'Sneakers',
    price: 125.00,
    quantity: 1,
    image: 'path_to_image.jpg',  // You can replace this with the image URL
  },
];

// Route to get cart data
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Route to add an item to the cart
app.post('/api/cart', (req, res) => {
  const newItem = req.body;
  cart.push(newItem); // Add item to the cart
  res.json({ message: 'Item added to cart', cart });
});

// Route to update item quantity
app.put('/api/cart/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const item = cart.find((item) => item.id == id);
  
  if (item) {
    item.quantity = quantity;
    res.json({ message: 'Item quantity updated', cart });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Route to remove an item from the cart
app.delete('/api/cart/:id', (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.id != id);
  res.json({ message: 'Item removed from cart', cart });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});