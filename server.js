// imports
const express = require('express');
const socialDB = require('./config/connection');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// mongoose connection
socialDB.once('open', async() => {
  console.log('connected');

  // Delete the collections if they exist
  let userCheck = await socialDB.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await socialDB.dropCollection('users');
  };

  let thoughtCheck = await socialDB.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await socialDB.dropCollection('thoughts');
  };
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
});