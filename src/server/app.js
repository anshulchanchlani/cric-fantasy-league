const express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var app = express();

//Utilities
const logger = require('./../utilities/logger');

//Routes
const api = require('./routes/api.js');

app.use(helmet());
app.use(require('morgan')({"stream": logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/',api);

app.listen(3000, function () {
  console.log('cric-fantasy-league backend running on 3000')
})

module.exports = app;
