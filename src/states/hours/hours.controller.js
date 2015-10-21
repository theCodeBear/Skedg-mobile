'use strict';

angular.module('skedg')

.controller('HoursCtrl', HoursCtrl);

HoursCtrl.$inject = ['$stateParams'];

function HoursCtrl($stateParams) {

  let vmHours = this;

// LOCAL VARIABLES



// VIEW-MODEL (SCOPE) VARIABLES
  vmHours.day = moment().dayOfYear($stateParams.day)._d;
  vmHours.timesOfDay = ['morning', 'afternoon', 'night'];
  vmHours.hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  vmHours.isHourInPast = isHourInPast;
  vmHours.isPastTime = isPastTime;
  vmHours.updatePlans = updatePlans;


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION


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
    console.log(plans);
  }

}