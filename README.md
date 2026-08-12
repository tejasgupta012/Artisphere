| Area | Technologies |
| --- | --- |
| Frontend | React 18, Vite, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Development | Nodemon, Concurrently |
| Design | CSS animations, responsive grid, 3D transforms |

## Project Structure

```text
artisphere-mern/
├── src/
│   ├── main.jsx             # React landing page
│   └── styles.css           # Visual system, responsive design, animations
├── server/
│   ├── index.js             # Express server and API routes
│   └── models/
│       └── Artwork.js       # MongoDB artwork schema
├── preview.html             # Static interactive homepage preview
├── collection.html          # Discover artworks page
├── artwork.html             # Artwork detail page
├── artists.html             # Artist spotlight page
├── sell.html                # Artist onboarding page
├── join.html                # Community signup page
├── vite.config.js
├── package.json
└── .env.example
```

##Project Review
![images](https://github.com/tejasgupta012/Artisphere/blob/main/images/landing%20page.png?raw=true)
![image](https://github.com/tejasgupta012/Artisphere/blob/main/images/Explore%20Paints.png?raw=true)
![image](https://github.com/tejasgupta012/Artisphere/blob/main/images/artist's%20page.png?raw=true)
![image](https://github.com/tejasgupta012/Artisphere/blob/main/images/Join%20the%20Circle.png?raw=true)

## Getting Started

### Prerequisites

- Node.js 18 or later
- MongoDB locally, or a MongoDB Atlas connection string

### Installation

```bash
git clone https://github.com/<your-username>/artisphere-mern.git
cd artisphere-mern
npm install
```

On Windows, if PowerShell blocks `npm`, use `npm.cmd install` instead.

### Environment Variables

Create a `.env` file in the root directory (you can copy `.env.example`):

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/artisphere
```

### Run the Application

```bash
npm run dev
```

This starts:

- Frontend: `http://localhost:5173`
- API server: `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/artworks` | Returns available artworks |
| `POST` | `/api/artworks` | Creates a new artwork |

Example request body for creating artwork:

```json
{
  "title": "Dawn, Unfolding",
  "artist": "Amara Okafor",
  "location": "Lagos, Nigeria",
  "price": 2400,
  "medium": "Mixed media",
  "year": 2024,
  "image": "https://example.com/artwork.jpg"
}
```

## Design Decisions

- **Editorial visual language:** The serif/sans-serif pairing and generous spacing make the platform feel like a contemporary gallery rather than a conventional e-commerce store.
- **Motion with purpose:** Floating elements, image zooms, and reveal transitions guide attention without making navigation harder.
- **Collector-to-artist journey:** The interface makes both marketplace roles obvious through dedicated discovery and selling routes.
- **Resilient development experience:** The API serves curated fallback artwork when a MongoDB connection is not active.

## Future Improvements

- JWT authentication with collector and artist roles
- Image upload with Cloudinary or AWS S3
- Shopping cart, checkout, and Stripe payments
- Search, filters, categories, and pagination
- Artist dashboards for inventory and sales analytics
- Saved artworks and collector profiles
- Unit/integration tests and CI workflow

## What This Project Demonstrates

This project demonstrates practical skills relevant to entry-level full-stack and frontend roles:

- Building responsive React interfaces from scratch
- Designing animated, user-centred product experiences
- Creating RESTful services with Express
- Modeling application data with Mongoose and MongoDB
- Structuring a frontend/backend project for maintainability

A MERN art marketplace starter featuring immersive 3D-style scenes, scroll reveals, animated product cards, a Node/Express API, and MongoDB models.
## Author

## Run it

1. Install Node.js 20+ and MongoDB (or set `MONGODB_URI` to an Atlas connection string).
2. In this folder, run `npm install`.
3. Copy `.env.example` to `.env` and update it if needed.
4. Run `npm run dev`.
5. Open `http://localhost:5173`.
---

The API is served at `http://localhost:5000/api` and the frontend proxies `/api` calls during development.
If you found this project interesting, consider giving the repository a star.
