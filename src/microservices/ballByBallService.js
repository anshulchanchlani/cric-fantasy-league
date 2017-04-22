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

seneca.add({role: 'caller', action: 'ball'}, function(msg,callback) {
  logger.info(msg.id);
  cricapiClient.post('/ballByBall', {
    apikey: APIKEY,
    unique_id: msg.id
  })
  .then(function (response) {
    logger.info("ballByBallService:caller:ball Request Received ")
    callback(response.data);
  })
  .catch(function (error) {
    logger.info("ERR:ballByBallService:caller:score - "+error);
    return error
  });
});

seneca.listen(PORTS.ballByBallService);
logger.info("ballByBallService: "+"running on "+PORTS.ballByBallService);
