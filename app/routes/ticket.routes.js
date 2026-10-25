import { Router } from 'express';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/', (req, res) => {
    res.send('¡Bienvenido a la Mesa de Ayuda TI!');
});

router.get('/acerca', (req, res) => {
    res.send('Esta es la sección de información del sistema de soporte técnico.');
});

export default router;