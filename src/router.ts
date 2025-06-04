import {Router} from 'express';

const router = Router();

// Autenticacion y Registro
router.get('/auth/register', (req, res) => {
    res.send("Hola mundo en express")
});

export default router;