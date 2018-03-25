let moment = require('moment');
module.exports = {
  toUnix: (tillDays) => {
    // converted from seconds to rounded unix hour
    return Math.floor(moment().add(tillDays, 'days').unix() / 3600);
  },
  formattedFromUnix: (unixTime) => {
    // converted from unix hour to date
    return moment(unixTime * 1000 * 3600).format('MMM Do YYYY, h:mm a');
  },
  generateUnixHourSlots: () => {
    let timeslots = [];
    let todayFirstSlot = Math.floor(moment().startOf('day').add(20, 'hours').unix() / 3600);
    // creates array of timeslots from tomorrow, through a week
    for (var i = 1; i < 8; i++) {
      timeslots.push(todayFirstSlot, todayFirstSlot + 1, todayFirstSlot + 2);
      todayFirstSlot = todayFirstSlot + 24;
    }
    return timeslots;
  }
}
