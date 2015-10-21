'use strict';

angular.module('skedg')

.controller('QuickViewCtrl', QuickViewCtrl);

QuickViewCtrl.$inject = ['$scope', '$state', 'Plan'];

function QuickViewCtrl($scope, $state, Plan) {

  let vmQuickView = this;


// VARIABLES
  vmQuickView.plans = Plan.get();

// FUNCTION ASSIGNMENTS
  vmQuickView.goToDate = (date) => $state.go('app.hours', {day: moment(date).dayOfYear()});

// CONTROLLER EXECUTION
  $scope.$on('$ionicView.enter', (e) => {
    // vmQuickView.plans = Plan.get();
    // console.log('upcoming plans', vmQuickView.plans);
  });

// LOCAL FUNCTION DEFINITIONS


// VM FUNCTION DEFINITIONS


}