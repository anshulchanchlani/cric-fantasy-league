var cricapi = require('node-cricapi');
//
// cricapi.cricketMatches(function(response){
//   var matches = JSON.parse(response).data;
//
//   matches.forEach(function(match){
//     // match.description = JSON.parse(match.description.replace(/&amp;/g,'&'));
//     // console.log("Match between :",match.description);
//     console.log(match.unique_id+" - "+match.title);
//   })
// });
var id = "1082610"
cricapi.ballByBall(id, function(_bbb) {
			var bbb = JSON.parse(_bbb, null, 2);
			console.log("Got ball-by-ball data for unique_id ", id, ": bundle of", _bbb.length, " bytes");
			console.log(JSON.stringify(bbb,null,2));
		});
