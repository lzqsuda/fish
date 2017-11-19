/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.meet')
        .controller('listController', ListController);

    /* @ngInject */
    function ListController(exception, dataService) {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "haha";
        vm.data = [];
        vm.query = query;

        activate();

        /////
        function activate() {
            //toastr.info('Are you the 6 fingered man?');
            // exception.catcher("hahaha");
             query();
        }

        function query() {
            dataService.getMeetList().then(function(result) {
                vm.data = result.data.result.data;
            });
        }
    }
})();
