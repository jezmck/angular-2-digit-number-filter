"use strict";
angular.module('filter.2digitnumber', [])
    .filter('2digitnumber', function () {
        return function (num) {
            var digits = 2;
            if (num > 10) digits = 0;
            else if (num > 1) digits = 1;
            return num.toFixed(digits);
        }
    });
