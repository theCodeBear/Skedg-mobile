'use strict';

angular.module('skedg')

.controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', '$window'];

function AccountCtrl($scope, $window) {

  let vmAccount = this;


// VARIABLES
  vmAccount.phone = $window.localStorage.getItem('skedgPhone');
  vmAccount.email = $window.localStorage.getItem('skedgEmail');

// FUNCTION ASSIGNMENTS
  vmAccount.phoneButton = phoneButton;
  vmAccount.emailButton = emailButton;

// CONTROLLER EXECUTION
  $scope.$on('$ionicView.enter', (e) => {
    vmAccount.editingPhone = false;
    vmAccount.editingEmail = false;
  });

// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS
  function phoneButton() {
    // if button is for saving
    if (vmAccount.editingPhone) {
      $window.localStorage.setItem('skedgPhone', vmAccount.phone);
    }
    vmAccount.editingPhone = !vmAccount.editingPhone;
  }

  function emailButton() {
    // if button is for saving
    if (vmAccount.editingEmail) {
      $window.localStorage.setItem('skedgEmail', vmAccount.email);
    }
    vmAccount.editingEmail = !vmAccount.editingEmail;
  }


}