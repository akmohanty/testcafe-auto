'use strict';
const vm = require('vm');

const express = require('express');
const PORT = 3000;
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser());

app.post('/run', (req, res) => {
  try {
    console.dir(req.body || 'empty');

    res.send(200);
  }
  catch (error) {
    res.send(e);
  }
});

app.listen(PORT, () => console.log(`The app listening on port ${PORT}!`))