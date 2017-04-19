var express = require('express');
var router = express.Router();
const cricapi = require('node-cricapi');

// GET /  --- returns message
router.get('/',function (req,res) {
  res.send("Call /:id for ball by ball response");
});


// GET /:id --- returns ball by ball response for given game id.
router.get('/:id',function (req,res) {
  var id = req.params.id;
  cricapi.ballByBall(id, function(_bbb) {
  			var bbb = JSON.parse(_bbb, null, 2);
        res.send(bbb);
  		});
});

module.exports = router;
