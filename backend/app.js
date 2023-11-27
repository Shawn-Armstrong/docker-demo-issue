const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable body-parser

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  // This is a simplistic example. You should validate the credentials and handle errors properly.
  // A real implementation should use password hashing and a more secure means of validation.

  const { email, password } = req.body;

  if (email === 'user@example.com' && password === 'password123') {
    res.json({ token: 'your_generated_token' });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/', (req, res) => res.send('Toto is a yorkie!!!!'));



app.listen(port, () => console.log(`Backend server listening on port ${port}!`));

const { Pool } = require('pg');
const pool = new Pool({
  user: 'user',
  host: 'database',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

app.get('/data', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM my_table');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
});
