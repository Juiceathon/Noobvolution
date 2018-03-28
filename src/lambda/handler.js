export function handler(event, context, callback) {
  console.log(`Serving ${event.httpMethod} request to ${event.path}`)

  let respondOk = (result) => {
    callback(null, {statusCode: 200, body: JSON.stringify(result.rows || [])})
  }
  let respondCreated = () => {
    callback(null, { statusCode: 201, body: 'Created' });
  }
  let respondNotFound = () => {
    callback(null, { statusCode: 404, body: 'Not Found'});
  }
  let returnError = (err) => {
    callback(err);
  };
  
  const db = require('../../database-postgres/index');
  const unix = require('../../utils/unixConversion');

  if (event.httpMethod === 'GET') {
    let query = event.queryStringParameters;
    if (query.type === 'search') {
      db.getGameCoaches() // Returns all coaches
        .then(respondOk)
        .catch(returnError)
    } else if (query.type === 'booking'){ 
      if (query.coachId) { // Returns all page details for booking a coach
        let results = [db.getCoachDetails(query.coachId), db.findCoachBookedTimeslots(query.coachId)];
        Promise.all(results)
          .then((resultArr) => {
            resultArr[0].rows[0].timeslot = resultArr[1].rows[0].timeslot;
            return resultArr[0];
          })
          .then(respondOk)
          .catch(returnError)
      } else {
        respondNotFound();
      }
      
    } else if (query.type === 'availability') {
      if (query.coachId) { // Returns available timeslots for coach
        const lodash = require('lodash');
        let allTimeslots = unix.generateUnixHourSlots();
        db.findCoachBookedTimeslots(query.coachId)
          .then((results) => {
            return { rows: _.difference(allTimeslots, results.rows.map((item) => item.timeslot)) }
          })
          .then(respondOk)
          .catch(returnError)
      } else if (query.playerId) { // Returns occupied timeslots for player
        db.findPlayerBookedTimeslots(query.playerId)
          .then(respondOk)
          .catch(returnError)
      } else {
        respondNotFound();
      }

    } else if (query.type === 'appointments') {
      if (query.coachId) { // Returns coaches booked apmts over next 2 weeks
        let results = [db.showCoachBookedApmts(query.coachId), db.getCoachDetails(query.coachId)];
        Promise.all(results)
          .then((resultArr) => {
            resultArr[0].rows.forEach((apmt) => {
              apmt.session_id = resultArr[1].rows[0].session_id;
            })
            return resultArr[0]
          })
          .then(respondOk)
          .catch(returnError)
      } else if (query.playerId) { // Returns player's booked apmts over next 2 weeks
        db.showPlayerBookedApmts(query.playerId)
          .then(respondOk)
          .catch(returnError)
      } else {
        respondNotFound();
      }
    } else {
      respondNotFound();
    }
  } else if (event.httpMethod === 'POST') {
    let body = JSON.parse(event.body);

    if (body.type === 'booking') { // create new booking
      db.createBooking(body.timeslot, body.coachId, body.playerId, body.gameId)
        .then(respondCreated)
        .catch(returnError)

    } else if (body.type === 'login') { // login for players and coaches
      db.loginUser(body.email)
        .then(respondOk)
        .catch(returnError)

    } else if (body.type === 'signup') {
      if (body.playerName) { // sign up for players
        db.signUpPlayer(body.playerName, body.playerEmail, body.avatarUrl)
          .then(respondCreated)
          .catch(returnError)
      } else if (body.coachName) { // sign up for coaches
        // ADD TOKEN GENERATION FUNCTION
        var {createSessionId} = require('../tokbox/tokbox.js');
        let sessionId = createSessionId();
        db.signUpCoach(body.coachName, body.coachEmail, body.gameId, body.avatarUrl, sessionId, body.hourlyRate, body.position)
          .then(respondCreated)
          .catch(returnError)

      } else {
        respondNotFound();
      }
    } else {
      respondNotFound();
    }
  } else {
    respondNotFound();
  }
};


