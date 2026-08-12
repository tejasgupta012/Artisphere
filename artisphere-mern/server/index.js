require('dotenv').config();
const express = require('express'); const cors = require('cors'); const mongoose = require('mongoose'); const Artwork = require('./models/Artwork');
const app = express(); app.use(cors()); app.use(express.json());
const featured = [
  { title: 'Dawn, Unfolding', artist: 'Amara Okafor', location: 'Lagos, Nigeria', price: 2400, medium: 'Mixed media', year: 2024, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85' },
  { title: 'Quiet Geometry', artist: 'Sora Kim', location: 'Seoul, Korea', price: 1800, medium: 'Acrylic on canvas', year: 2023, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85' },
  { title: 'Red Horizon', artist: 'Luca Bianchi', location: 'Milan, Italy', price: 3100, medium: 'Oil on linen', year: 2024, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85' }
];
app.get('/api/artworks', async (_req, res) => { try { const works = await Artwork.find().sort('-createdAt'); res.json(works.length ? works : featured); } catch { res.json(featured); } });
app.post('/api/artworks', async (req, res) => { try { res.status(201).json(await Artwork.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); } });
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/artisphere').then(() => console.log('MongoDB connected')).catch(() => console.log('MongoDB unavailable: serving featured works'));
app.listen(port, () => console.log(`API listening on ${port}`));
