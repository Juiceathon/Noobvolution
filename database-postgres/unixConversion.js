let moment = require('moment');
module.exports = {
  toUnix: (tillDays) => {
    // converted from seconds to rounded unix hour
    return Math.floor(moment().add(tillDays, 'days').unix() / 3600);
  },
  formattedFromUnix: (unixTime) => {
    // converted from unix hour to date
    return moment(unixTime * 1000 * 3600).format('MMM Do YYYY, h:mm a');
  }
}