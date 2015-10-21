'use strict';

angular.module('skedg')

.filter('capitalize', Capitalize);

Capitalize.$inject = ['$filter'];

function Capitalize($filter) {
  return (input) => {
    const firstLetter = $filter('uppercase')(input[0]);
    return `${firstLetter}${input.slice(1)}`;
  };
}