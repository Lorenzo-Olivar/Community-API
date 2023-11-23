// imports
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// mongoose connection
db.once('open', () => {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
});