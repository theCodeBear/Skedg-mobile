'use strict';

angular.module('skedg')

.filter('hours', Hours);

Hours.$inject = [];

function Hours() {
  return (hour) => {
    if (!(hour >= 0) && !(hour <= 23)) return hour;
    if (hour === 0) return '12am';
    if (hour === 12) return '12pm';
    if (hour > 12) {
      hour -= 12;
      hour += 'pm';
    } else {
      hour +='am';
    }
    return hour;
  };
}