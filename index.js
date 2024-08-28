const express = require('express');
const { Pool } = require('pg');
const Sequelize = require('sequelize')

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

const pool1 = new Pool({
  user: 'postgres',
  host: 'db1',
  database: 'postgres1',
  password: 'postgres',
  port: 5433,
});

const pool2 = new Pool({
  user: 'postgres',
  host: 'db2',
  database: 'postgres2',
  password: 'postgres',
  port: 5434,
});

const pool3 = new Pool({
  user: 'postgres',
  host: 'db3',
  database: 'postgres3',
  password: 'postgres',
  port: 5435,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    const result1 = await pool1.query('SELECT NOW()');
    const result2 = await pool2.query('SELECT NOW()');
    const result3 = await pool3.query('SELECT NOW()');
    res.send(`Current time from database postgres: ${result.rows[0].now}\nCurrent time from database postgres1: ${result1.rows[0].now}\nCurrent time from database postgres2: ${result2.rows[0].now}\nCurrent time from database postgres3: ${result3.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});