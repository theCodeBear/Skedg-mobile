'use strict';

angular.module('skedg')

.controller('DaysCtrl', DaysCtrl);

DaysCtrl.$inject = ['$stateParams'];

function DaysCtrl($stateParams) {

  let vmDays = this;

// LOCAL VARIABLES
  let week = $stateParams.week;
  let startOfWeek = moment().add(week, 'weeks')._d;

// VIEW-MODEL (SCOPE) VARIABLES
  vmDays.days = initDays(startOfWeek);


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION



// LOCAL FUNCTION DEFINITIONS
  function initDays(monday) {
    let tempArr = [];
    for (let day=0; day < 7; day++) {
      let longFormDay = moment().add(day, 'days')
      tempArr.push(formatDayDisplay(longFormDay));
    }
    return tempArr;
  }

  function formatDayDisplay(day) {
    let dayInWeekNum = moment(day).day();
    let dayInWeekStr = moment().isoWeekday(dayInWeekNum).format('dddd');
    let dayAndMonth = moment(day).format('MMM DD');
    return `${dayInWeekStr} ${dayAndMonth}`;
  }

// VM FUNCTION DEFINITIONS


}