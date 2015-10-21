'use strict';

angular.module('skedg')

.controller('TitleCtrl', TitleCtrl);

TitleCtrl.$inject = ['$window'];

function TitleCtrl($window) {

  let vmTitle = this;


// VARIABLES
  vmTitle.phoneSaved = () => !!$window.localStorage.getItem('skedgPhone');
  vmTitle.emailSaved = () => !!$window.localStorage.getItem('skedgEmail');

// FUNCTION ASSIGNMENTS
  vmTitle.savePhone = (phone) => $window.localStorage.setItem('skedgPhone', phone);
  vmTitle.saveEmail = (email) => $window.localStorage.setItem('skedgEmail', email);

// CONTROLLER EXECUTION


// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS


}