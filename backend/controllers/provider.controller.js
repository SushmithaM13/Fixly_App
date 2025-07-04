const User=require("../models/user.model");

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await User.find({ isProvider: true });
    res.json(providers);
  } catch {
    res.status(500).json({ error: 'Something went wrong' });
  }
};