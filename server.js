const express = require('express');
const path = require('path');
// const mysql = require('mysql2');
const db = require('./src/server/config/database');

db.authenticate()
  .then(() => console.log('...Database connected'))
  .catch((err) => console.log(err));

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'photostudio',
//   password: 'root',
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('gg');
//   } else {
//     console.log('norm1');
//   }
// });

// function getData() {
//   connection.query('SELECT * FROM `photostudios`', (err, res) => {
//     if (err) {
//       console.log('gg');
//     } else {
//       // console.log(res[0].name);
//       console.log(res)
//       return res;
//     }
//   });
// }

const app = express();

const PORT = process.env.PORT || '8080';

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Get photostudios

app.use('/photostudios', require('./src/server/routes/photostudios'));

app.listen(PORT, () => {
  console.log('Server has been started at port: ', PORT);
});
