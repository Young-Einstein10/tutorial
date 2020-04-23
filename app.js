const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const pool = require('./models/config');

app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
  })
);

const getUsers = (request, response) => {
  pool.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      console.error(error)
    }
    response.status(200).json(results.rows)
  });
}

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', getUsers)

module.exports = app;