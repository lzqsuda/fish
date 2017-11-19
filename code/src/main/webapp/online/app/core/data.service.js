(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', DataService);

    /* @ngInject */
    function DataService($http, $location) {


        var service = {
            getDemo: getDemo,
            getMeetList:getMeetList
        };

        return service;


        ///////
        function getDemo() {
            return $http.get('/test/data/demo.json')
                //.then(getDemoComplete)
                .catch(function(message) {
                    alert("exception : hahaha" + message);
                    //exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getDemoComplete(data, status, headers, config) {
                // return data.data[0].data.results;
                //return data;
            }
        }


        function getMeetList() {
        	
            return $http.get('/office/html/test/data/getMeetList.do')
                //.then(getDemoComplete)
                .catch(function(message) {
                    alert("exception : hahaha" + message);
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
