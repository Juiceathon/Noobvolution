let moment = require('moment');
module.exports = (tillDays) => {
  return Math.floor(moment().add(tillDays, 'days').unix() / 60);
}