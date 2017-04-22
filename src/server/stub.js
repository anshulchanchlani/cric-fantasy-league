var seneca = require('seneca')();
var PORTS = require("./../config/PORTS");

module.exports = function (ms) {
  setInterval(function () {
    seneca.client({port:PORTS.matchListService}).act( { role: 'caller', action: 'matches' }, function ( result ) {
      console.log( result );
    });
  },ms);
};
