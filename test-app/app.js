'use strict';

const express = require('express');
const PORT = 3000;
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser());

app.use(express.static('public'))

app.post('/search', (req, res) => {
  try {
    console.log(req.body.num_of_years || 'empty');
    setTimeout(function () {
      res.send((req.body.num_of_years * 1000).toString());
    }, req.body.num_of_years * 1000);
  }
  catch (error) {
    res.send(e);
  }
});

app.listen(PORT, () => console.log(`The app listening on port ${PORT}!`))