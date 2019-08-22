const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('hello');
});

app.listen('3000', () => {
  console.log(`server is running on 3000 port`);
});
