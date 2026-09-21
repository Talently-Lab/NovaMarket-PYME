const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Seguridad: no exponer la versión de Express en los headers de respuesta
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

// Health check — usado por QA para verificar que el servidor está activo
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Manejador de errores global — evita que Express exponga stack traces internos
// en el body de la respuesta (OWASP A05 / A09)
app.use((err, req, res, next) => {
  // En desarrollo se puede loguear el error internamente, pero nunca enviarlo al cliente
  if (process.env.NODE_ENV !== 'test') {
    console.error('[Error]', err.message);
  }

  // JSON malformado
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON inválido en el cuerpo de la petición.' });
  }

  // Cualquier otro error no controlado
  return res.status(500).json({ error: 'Error interno del servidor.' });
});

// Solo levanta el servidor si el archivo se ejecuta directamente (no en tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;