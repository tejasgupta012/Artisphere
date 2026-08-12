const mongoose = require('mongoose');
const artworkSchema = new mongoose.Schema({ title: { type: String, required: true }, artist: { type: String, required: true }, location: String, price: Number, image: String, medium: String, year: Number, available: { type: Boolean, default: true } }, { timestamps: true });
module.exports = mongoose.model('Artwork', artworkSchema);
