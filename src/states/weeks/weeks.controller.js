'use strict';

angular.module('skedg')

.controller('WeeksCtrl', WeeksCtrl);

WeeksCtrl.$inject = [];

function WeeksCtrl() {

  let vmWeeks = this;


// LOCAL VARIABLES
  let startOfThisWeek = moment().startOf('week');


// VIEW-MODEL (SCOPE) VARIABLES
  vmWeeks.fullYearOfWeeks = [];

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION
  vmWeeks.fullYearOfWeeks = get52Weeks(startOfThisWeek);



// LOCAL FUNCTION DEFINITIONS
  function getWeek(monday) {
    let week = { start: '', end: '' };
    let start = moment(monday)._d;
    week.start = moment(start).format('x');
    let endOfWeek = moment(monday).add(6, 'days')._d;
    week.end = moment(endOfWeek).format('x');
    return week;
  }

  function get52Weeks(firstDate) {
    let yearOfWeeks = [];
    for (let week=1, day=firstDate; week <= 52; week++) {
      yearOfWeeks.push(getWeek(day));
      day = moment(firstDate).add(week, 'week');
    }
    return yearOfWeeks;
  }

// VM FUNCTION DEFINITIONS

}