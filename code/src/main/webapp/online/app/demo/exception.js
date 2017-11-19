(function() {
    'use strict';

    angular
        .module('app.demo')
        .factory('$exceptionHandler', exceptionHandler);


    function exceptionHandler() {
        return function(exception, cause) {
            alert(exception.message);
        }
    };
})();
