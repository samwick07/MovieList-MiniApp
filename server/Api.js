const express = require('express');
const api = express();
const port = 8080;

api.get('/', (req, res) => res.send(`Localhost Movie List API is listening at http://localhost:${port}!`));

api.listen(port, () => console.log(`Localhost Movie List API is listening at http://localhost:${port}!`));