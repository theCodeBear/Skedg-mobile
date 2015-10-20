'use strict';

angular.module('skedg')

.filter('dateDisplay', DateDisplay);

DateDisplay.$inject = [];

function DateDisplay() {

  // weekday parameter is a boolean for whether or not the weekday should be
  // prepended to the date. No weekday is formatted as 'Oct 20', with the
  // weekday is formatted as 'Tuesday Oct 20'
  return function(day, weekday = false) {
    let dayInWeekNum = moment(day).day();
    let dayAndMonth = moment(day).format('MMM DD');
    if (weekday) {
      let dayInWeekStr = moment().isoWeekday(dayInWeekNum).format('dddd');
      return `${dayInWeekStr} ${dayAndMonth}`;
    } else {
      return dayAndMonth;
    }
  };

}