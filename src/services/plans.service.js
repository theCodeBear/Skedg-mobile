'use strict';

angular.module('skedg')

.factory('Plan', Plan);

Plan.$inject = ['_'];

function Plan( _ ) {

  // let plans = [];
  let plans = [
    {
      afternoon: 'get ready to trick or treat',
      date: moment('10/31/2015')._d,
      night: 'halloween night!'
    },
    {
      '11': 'right now',
      date: moment('10/21/2015')._d,
      night: 'tonight'
    },
    {
      '12': 'high noon tomorrow',
      date: moment('10/22/2015')._d
    }
  ];

  let service = {
    get,
    set
  };

  return service;



  function get() {
    return plans;
  }

  function set(newPlan) {
    // plans.push(newPlan);
  }

}