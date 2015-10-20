'use strict';

angular.module('skedg')

.controller('WeeksCtrl', WeeksCtrl);

WeeksCtrl.$inject = [];

function WeeksCtrl() {

  let vmWeeks = this;


// LOCAL VARIABLES
  let currentWeek = moment().week();
  let startOfThisWeek = moment().week(currentWeek)._d;   // monday of this week


// VIEW-MODEL (SCOPE) VARIABLES
  vmWeeks.fullYearOfWeeks = [];

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION
  vmWeeks.fullYearOfWeeks = get52Weeks(startOfThisWeek);



// LOCAL FUNCTION DEFINITIONS
  function getWeek(monday) {
    let week = { start: '', end: '' };
    week.start = moment(monday)._d;
    let endOfWeek = moment(monday).add(6, 'days')._d;
    week.end = moment(endOfWeek)._d;
    return week;
  }

  function get52Weeks(firstMonday) {
    let yearOfWeeks = [];
    for (let week=1, monday=firstMonday; week <= 52; week++) {
      yearOfWeeks.push(getWeek(monday));
      monday = moment(firstMonday).add(week, 'week');
    }
    return yearOfWeeks;
  }

// VM FUNCTION DEFINITIONS

}