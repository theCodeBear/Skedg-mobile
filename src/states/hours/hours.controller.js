'use strict';

angular.module('skedg')

.controller('HoursCtrl', HoursCtrl);

HoursCtrl.$inject = ['$stateParams'];

function HoursCtrl($stateParams) {

  let vmHours = this;

// LOCAL VARIABLES



// VIEW-MODEL (SCOPE) VARIABLES
  vmHours.day = moment().dayOfYear($stateParams.day)._d;
  vmHours.nums = ['Morning', 'Afternoon', 'Night', '1am','2am','3am','4am','5am','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12pm'];


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION




// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS


}