/**
 *  Hello Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('HelloController', HelloController);

    /* @ngInject */
    function HelloController($route) {
        /*jshint validthis: true */
        var vm = this;
        vm.name = 0;
        vm.people = [{
            name: "Ari",
            city: "San Francisco"
        }, {
            name: "Erik",
            city: "Seattle"
        }];
        vm.add = add;
        vm.routes = $route.routes;

        activate();
        /////

        function activate() {

        }

        function add(amount) {
            vm.name += amount
        };
    }
})();
