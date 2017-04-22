var express = require('express');
var router = express.Router();
const cricapi = require('node-cricapi');
const logger = require('./../../utilities/logger');

// GET /  --- returns message
router.get('/',function (req,res) {
  logger.info("Received request for api:GET / ")
  res.send("Call /:id for ball by ball response");
  logger.info("Exiting api:GET /");
});


// GET /:id --- returns ball by ball response for given game id.
router.get('/:id',function (req,res) {
  logger.info("Received request for GET /:id ")
  var id = req.params.id;
  cricapi.ballByBall(id, function(_bbb) {
  			var bbb = JSON.parse(_bbb, null, 2);
        res.send(bbb);
  		});
  logger.info("Exiting api:GET /");
});


//GET /matches --- returns the list of matches
router.get('/matches', function (req,res) {
  logger.info("Received request for GET /matches");
  cricapi.cricketMatches(function(databundle) {
  	logger.info(databundle);
    res.send(databundle);
  });
  logger.info("Exiting api:GET /matches");
});

module.exports = router;
