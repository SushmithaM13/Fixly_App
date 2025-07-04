const express=require('express');
const cors =require('cors');
const dotenv=require('dotenv');

dotenv.config();

const app=express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', require("./routes/auth.routes"));         // Login & Signup
app.use('/api/providers', require("./routes/provider.routes")); // List all service providers
app.use('/api/bookings', require("./routes/booking.routes"));   // Book appointments

// Default Route
app.get('/', (req, res) => {
  res.send('Fixly API is running...');
});

// app.all('*', (req, res) => {
//   console.log("❌ Unmatched route:", req.method, req.originalUrl);
//   res.status(404).json({ message: 'Route not found' });
// });

module.exports=app;