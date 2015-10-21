'use strict';

angular.module('skedg')

.factory('Plan', Plan);

Plan.$inject = ['_'];

function Plan( _ ) {

  let plans = [];

  let service = {
    get,
    set
  };

  return service;



  function get() {
    return plans;
  }

  function set(newPlan, day) {
    plans[day] = newPlan;
  }

}