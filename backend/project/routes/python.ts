// server/routes/aiworld.ts
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const scriptPath = path.join(__dirname, '../assets/main');

  fs.readFile(scriptPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading Python script:', err);
      return res.status(500).json({ error: 'Failed to read script.' });
    }
    res.json({ code: data });
  });
});

export default router;
