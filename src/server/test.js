var cricapi = require('node-cricapi');

cricapi.cricketMatches(function(response){
  var matches = JSON.parse(response).data;

  matches.forEach(function(match){
    match.description = JSON.parse(match.description.replace(/&amp;/g,'&'));
    console.log("Match between :",match.description);
  })
})
