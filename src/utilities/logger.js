const winston = require('winston');
winston.emitErrs = true;
const fs = require('fs');

// Create directory for logs if doesn't already exist.
var dir = '/logs';
if(!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

// logger utility
var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename:dir+'/info.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function (message, encoding) {
    logger.info(message);
  }
};
