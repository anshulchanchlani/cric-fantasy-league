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

seneca.add({role: 'caller', action: 'score'}, function(msg,callback) {
  logger.info(msg.id);
  cricapiClient.post('/cricketScore', {
    apikey: APIKEY,
    unique_id: msg.id
  })
  .then(function (response) {
    logger.info("scoreService:caller:score Request Received ")
    callback(response.data);
  })
  .catch(function (error) {
    logger.info("ERR:scoreService:caller:score - "+error);
    return error
  });
});

seneca.listen(PORTS.scoreService);
logger.info("scoreService: "+"running on "+PORTS.scoreService);
