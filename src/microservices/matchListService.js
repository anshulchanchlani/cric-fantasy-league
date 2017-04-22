const seneca = require('seneca')();
const axios = require('axios');
const APIKEY = require('./../config/APIKEY');
const PORTS = require('./../config/PORTS');
const logger = require('./../utilities/logger');

var cricapiClient = axios.create({
  baseURL: 'http://cricapi.com/api/',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

seneca.add({role: 'caller', action: 'matches'}, function(msg,callback) {
  cricapiClient.post('/matches', {
    apikey: APIKEY
  })
  .then(function (response) {
    logger.info("matchListService:caller:matches Request Received ")
    callback(response.data);
  })
  .catch(function (error) {
    logger.info("ERR:matchListService:caller:matches - "+error);
    return error
  });
});

seneca.listen(PORTS.matchListService);
logger.info("matchListService: "+"running on "+PORTS.matchListService);
