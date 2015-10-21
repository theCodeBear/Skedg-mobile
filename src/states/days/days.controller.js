'use strict';

angular.module('skedg')

.controller('DaysCtrl', DaysCtrl);

DaysCtrl.$inject = ['$stateParams', '$state'];

function DaysCtrl($stateParams, $state) {

  let vmDays = this;

// LOCAL VARIABLES
  let week = moment().add($stateParams.week, 'weeks')._d;

// VIEW-MODEL (SCOPE) VARIABLES
  vmDays.startOfWeek = moment(week).startOf('week');
  vmDays.days = initDays(vmDays.startOfWeek);
  vmDays.goToHours = goToHours;
  vmDays.dateInThePast = dateInThePast;


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION


// LOCAL FUNCTION DEFINITIONS
  function initDays(monday) {
    let tempArr = [];
    for (let day=0; day < 7; day++) {
      let theDay = moment(monday).add(day, 'days');
      tempArr.push(moment(theDay).format('x'));
    }
    return tempArr;
  }

// VM FUNCTION DEFINITIONS
function goToHours(monday, index) {
  let chosenDay = moment(monday).add(index, 'days')._d;
  chosenDay = moment(chosenDay).dayOfYear();
  $state.go('app.hours', {day:chosenDay});
}

function dateInThePast(day) {
  return day < moment().startOf('day');
}

}