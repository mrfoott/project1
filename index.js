const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Current time from PostgreSQL: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});