import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());


const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const DATA_PATH  = path.join(__dirname, '../src/api/clothing_catalog.json');
app.use('/img', express.static(path.join(__dirname, '/img')))

let products = [];

async function loadData() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    products = JSON.parse(raw);
    console.log(`Loaded ${products.length} products`);
  } catch (err) {
    console.error('Cannot read JSON:', err);
  }
}
await loadData();


app.get('/api/products', (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  let list = [...products];

  if (category) {
    list = list.filter(p => p.category === category);
  }
  if (minPrice) {
    list = list.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    list = list.filter(p => p.price <= Number(maxPrice));
  }

  res.json(list);
});


app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
});

// 404 для остальных путей
app.use((_, res) => res.status(404).json({ message: 'Route not found' }));

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
