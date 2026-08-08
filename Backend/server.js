const express = require('express');
const app = express();
const productRoutes = require('./src/routes/productRoutes');
const authRoutes = require('./src/routes/authRoutes');
const settingsRoutes = require('./src/routes/settingsRoute');
const cors = require('cors');
const helmet = require('helmet'); 

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});