require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: false}
});

const connectDB = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Ya estás conectado a Supabase (PostgreSQL):', res.rows[0].now);
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = { pool, connectDB };