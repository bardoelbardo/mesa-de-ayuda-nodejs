import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import ticketRoutes from './app/routes/ticket.routes.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', ticketRoutes);

app.get('/soporte', (req, res) => {
    res.sendFile(path.join(__dirname, 'mesadeayuda.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});