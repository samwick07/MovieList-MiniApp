const express = require('express');
const cors = require('cors');
const api = express();
const port = 8080;

api.use(cors());
api.use(express.json());

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

// Hard-coded movies for back-end testing.
const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
    {title: 'Inception'},
  ];

api.get('/', (req, res) => res.status(200).send(`Localhost Movie List API is listening at http://localhost:${port}!`));

api.get('/movies', (req, res) => res.status(200).send(movies));

api.listen(port, () => console.log(`Localhost Movie List API is listening at http://localhost:${port}!`));