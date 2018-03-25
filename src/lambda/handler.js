export function handler(event, context, callback) {
  console.log(event)
  let query = event.queryStringParameters;

  let respondOk = (result) => {
    console.log('result here', result)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(result.rows)
    })
  }
  let notFound = () => {
    callback(null, {
      statusCode: 404
    });
  }
  let returnError = (err) => {
    callback(err);
  };
  
  const db = require('../../database-postgres/index');

  if (event.httpMethod === 'GET') {

    if (query.type === 'search') {
      db.getGameCoaches(query.game) // Returns all coaches for a particular game
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
        notFound();
      }
      
    } else if (query.type === 'availability') {
      if (query.coachId) { // Returns occupied timeslots for coach
        db.findCoachBookedTimeslots(query.coachId)
          .then(respondOk)
          .catch(returnError)
      } else if (query.playerId) { // Returns occupied timeslots for player
        db.findPlayerBookedTimeslots(query.playerId)
          .then(respondOk)
          .catch(returnError)
      } else {
        notFound();
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
        notFound();
      }

    } else {
      notFound();
    }
  } else if (event.httpMethod === 'POST') {
    // login
    // sign up
  } else {
    notFound();
  }

}
