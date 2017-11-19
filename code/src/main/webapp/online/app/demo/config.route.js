(function() {
    'use strict';
    angular
        .module('app.demo')
        //.run(appRun)
        .config(["$routeProvider", function($routeProvider) {
            $routeProvider
                .when('/view1', {
                    templateUrl: 'app/demo/view1.html',
                    controller: 'View1Controller',
                    controllerAs: 'vm',
                    title: 'view1'
                })
                .when('/view2', {
                    templateUrl: 'app/demo/view2.html',
                    controller: 'View2Controller',
                    controllerAs: 'vm',
                    title: 'view2'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
    // appRun.$inject = ['routehelper']

    /* @ngInject */
    /*function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [{
            url: '/demo/view1',
            config: {
                templateUrl: 'app/demo/view1.html',
                controller: 'View1Controller',
                controllerAs: 'vm',
                title: 'view1'
            }
        }];
    }*/
})();
