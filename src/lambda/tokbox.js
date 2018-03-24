var OpenTok = require('opentok');
var {API_KEY, API_SECRET} = require('./config.js');
var opentok = new OpenTok(API_KEY, API_SECRET);
var sessionId;
opentok.createSession({mediaMode:"routed"}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
    var token = opentok.generateToken(sessionId, {role: 'publisher', data: 'userid=1'});
    console.log('TOKEN', token);
  }
});

export function tokBox (event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({sessionId: "Hello, World!", token: 'AAAAAA'})
  });
}