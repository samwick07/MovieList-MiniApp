const express = require('express');
const api = express();
const port = 8080;

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