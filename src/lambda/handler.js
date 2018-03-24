export function handler(event, context, callback) {
  console.log(event)
  let query = event.queryStringParameters;

  let respondOK = (result) => {
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
      db.getGameCoaches(query.game)
        .then(respondOK)
        .catch(returnError)
    } else {
      notFound();
    }
  } else if (event.httpMethod === 'POST') {

  } else {
    notFound();
  }

}

// login
// pull 
