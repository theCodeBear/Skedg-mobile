'use strict';

angular.module('skedg')

.controller('SplashpageCtrl', SplashpageCtrl);

SplashpageCtrl.$inject = ['$timeout', '$state'];

function SplashpageCtrl($timeout, $state) {

  $timeout(() => {$state.go('title');}, 3000);

}