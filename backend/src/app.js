require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connectar a la base de datos
connectDB();

//Endppoint de prueba de salud(Requerido en tiquet SPR1.3)
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Servidor NovaMarket-PYME está funcionando correctamente',
        timestamp: new Date().toISOString()
    })
});

//Levantar servidor en el puerto 300
app.listen(PORT, () => {
    console.log(`Servidor NovaMarket-PYME escuchando en el puerto ${PORT}`);
});