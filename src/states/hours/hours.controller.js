'use strict';

angular.module('skedg')

.controller('HoursCtrl', HoursCtrl);

HoursCtrl.$inject = ['$stateParams', '$ionicHistory', 'Plan', '_'];

function HoursCtrl($stateParams, $ionicHistory, Plan, _) {

  let vmHours = this;


// VARIABLES
  vmHours.day = moment().dayOfYear($stateParams.day)._d;
  vmHours.timesOfDay = ['morning', 'afternoon', 'night'];
  vmHours.hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  vmHours.isHourInPast = isHourInPast;
  vmHours.isPastTime = isPastTime;
  vmHours.updatePlans = updatePlans;
  let thisDaysPlans = _.get(Plan.get(), moment(vmHours.day).format('MM_DD_YYYY'));


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION
  vmHours.plans = thisDaysPlans;


// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS
  function isHourInPast(hour) {
    // if day selected is today
    if (moment().dayOfYear() === parseInt($stateParams.day)) {
      return hour < moment().hour();
    } else {
      return false;
    }
  }

  // checks if the current time is past the morning, afternoon, or night.
  // index 0 = morning, 1 = afternoon, 2 = night.
  function isPastTime(index) {
    if (moment().dayOfYear() !== parseInt($stateParams.day)) return false;
    if (index === 0 && moment().hour() > 11) return true;
    if (index === 1 && moment().hour() > 18) return true;
    return false; 
  }

  function updatePlans(plans) {
    // delete blank properties
    for (var prop in plans) {
      if (!plans[prop]) delete plans[prop];
    }
    const thisDay = moment(vmHours.day).format('MM_DD_YYYY');
    Plan.set(plans, thisDay);
    $ionicHistory.goBack();
  }

}