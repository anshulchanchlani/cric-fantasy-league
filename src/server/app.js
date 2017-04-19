const express = require('express');
var app = express();
const api = require('./routes/api.js');


app.use('/',api);

app.listen(3000, function () {
  console.log('cric-fantasy-league backend running on 3000')
})
