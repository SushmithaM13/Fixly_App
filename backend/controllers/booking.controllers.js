const Booking=require("../models/booking.model");

exports.createBooking = async (req, res) => {
  const { providerId, start, end } = req.body;

  try {
    const booking = new Booking({
      providerId,
      userId: req.userId,
      start,
      end
    });

    await booking.save();
    res.status(201).json(booking);
  } catch {
    res.status(400).json({ error: 'Failed to create booking' });
  }
};