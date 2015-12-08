"use strict";
angular.module('filter.twodigitnumber', [])
    .filter('twodigitnumber', function () {
        return function (num) {
            num = num == undefined ? 0 : parseFloat(num);
            if (num < 1) return num.toFixed(2).substr(1);
            if (num < 10) return num.toFixed(1);
            return num.toFixed(0);
        }
    });
