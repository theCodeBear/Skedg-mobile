'use strict';

angular.module('skedg')

.controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$window'];

function AccountCtrl($window) {

  let vmAccount = this;


// VARIABLES
  vmAccount.phone = $window.localStorage.getItem('skedgPhone');
  vmAccount.email = $window.localStorage.getItem('skedgEmail');

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION


// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS


}