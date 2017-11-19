/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('View1Controller', View1Controller);

    /* @ngInject */
    function View1Controller(DataService) {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "hahah1";
        vm.data = {
            name: 'localhahahah'
        };

        activate();
        /////

        function activate() {
            var i = 0;
            var j = 100 / i;
            return getDemoData();
        }

        function getDemoData() {
            return DataService.getDemo().then(function(data) {
                vm.data = data.data;
                alert("data:" + data.data.name);
                return vm.data;
            });
        }


    }
})();
