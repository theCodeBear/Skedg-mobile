'use strict';

angular.module('skedg')

.filter('orderByDate', OrderByDate);

function OrderByDate() {
  return (input, date) => {
    input.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    return input;
  };
}