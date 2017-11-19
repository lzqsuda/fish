(function() {
    'use strict';

    angular
        .module('app.demo')
        .factory('DataService', DataService);

    /* @ngInject */
    function DataService($http, $location) {


        var service = {
            getDemo: getDemo
        };

        return service;


        ///////
        function getDemo() {
            return $http.get('/test/data/demo111.json')
                //.then(getDemoComplete)
                .catch(function(message) {
                   alert("exception : hahaha"+message);
                    //exception.catcher('XHR Failed for getAvengers')(message);
                   $location.url('/');
                });

            function getDemoComplete(data, status, headers, config) {
               // return data.data[0].data.results;
               //return data;
            }
        }

        

    }
})();
