(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('exception', Exception);

    /* @ngInject */
    function Exception(logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            logger.error(message,"haha","title");
        }
    }
})();
