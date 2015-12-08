"use strict";
angular.module('filter.twodigitnumber', [])
    .filter('twodigitnumber', function () {
        return function (num) {
            num = num == undefined ? 0 : parseFloat(num);
            if (num == 0) return '0';
            if (num < 1) return num.toFixed(2).toString().substr(1);
            if (num < 10) return num.toFixed(1).toString();
            return num.toFixed(0).toString();
        }
    });
