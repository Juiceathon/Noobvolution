var OpenTok = require('opentok');
var {API_KEY, API_SECRET} = require('../../utils/config');
var opentok = new OpenTok(API_KEY, API_SECRET);

var createSessionId = () => {
  return new Promise ((resolve, reject) => {
    opentok.createSession({mediaMode:"routed"}, function(error, session) {
      if (error) {
        reject(error);
      } else {
        resolve(session.sessionId);
      }
    });
  });
}

var createToken = (sessionId) => {
  return opentok.generateToken(sessionId, {role: 'publisher'});
};

module.exports = {
  createSessionId,
  createToken
}
// export function tokBox (event, context, callback) {
//   console.log(event);
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({sessionId: "Hello, World!", token: 'AAAAAA'})
//   });
// }