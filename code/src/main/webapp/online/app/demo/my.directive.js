(function() {
    'use strict';
    angular.module('app.demo')
        .directive('myDirective', myDirective);

    ////
    function myDirective() {
        return {
            restrict: 'E',
            template: '<a href="http://google.com">Click me to go to Google</a>'
        };
    }

})();
