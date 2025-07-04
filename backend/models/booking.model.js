const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  start: Date,
  end: Date,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
