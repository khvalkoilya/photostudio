const express = require('express');
const path = require('path');
const db = require('./src/server/config/database');

db.authenticate()
  .then(() => console.log('...Database connected'))
  .catch((err) => console.log(err));

db.sync()
  .catch((err) => console.log(err));

const app = express();

const PORT = process.env.PORT || '8080';

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Get photostudios

app.use('/photostudios', require('./src/server/routes/photostudios'));
app.use('/accounts', require('./src/server/routes/accounts'));

app.listen(PORT, () => {
  console.log('Server has been started at port: ', PORT);
});
