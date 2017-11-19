(function() {
    'use strict';
    angular
        .module('app.core')
        .config(["$routeProvider", function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/welcome/welcome.html',
                    controller: 'welcomeController',
                    controllerAs: 'vm',
                    title: 'Welcome'
                })
                .when('/meet/list.do', {
                    templateUrl: 'app/meet/list.html',
                    controller: 'listController',
                    controllerAs: 'vm',
                    title: 'Meet List'
                })
                .when('/meet/add.do', {
                    templateUrl: 'app/meet/add.html',
                    controller: 'addController',
                    controllerAs: 'vm',
                    title: 'Meet Add'
                })
                .when('/percenter/percenter.do', {
                    templateUrl: 'app/percenter/percenter.html',
                    controller: 'percenterController',
                    controllerAs: 'vm',
                    title: 'percenter'
                })
                .when('/organization/tree.do', {
                    templateUrl: 'app/organization/tree.html',
                    controller: 'treeController',
                    controllerAs: 'vm',
                    title: 'OrgTree'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

})();
