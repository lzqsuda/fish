/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('View2Controller', View2Controller);

    /* @ngInject */
    function View2Controller() {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "haha";
        
        activate();
        /////

        function activate() {
            alert("hahahaha2");
        }

        
    }
})();