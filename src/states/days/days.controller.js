'use strict';

angular.module('skedg')

.controller('DaysCtrl', DaysCtrl);

DaysCtrl.$inject = ['$stateParams', '$state'];

function DaysCtrl($stateParams, $state) {

  let vmDays = this;

// LOCAL VARIABLES
  let week = $stateParams.week;

// VIEW-MODEL (SCOPE) VARIABLES
  vmDays.startOfWeek = moment().add(week, 'weeks')._d;
  vmDays.days = initDays(vmDays.startOfWeek);
  vmDays.goToHours = goToHours;


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

}