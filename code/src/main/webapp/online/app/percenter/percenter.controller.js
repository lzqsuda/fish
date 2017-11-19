/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.percenter')
        .controller('percenterController', PercenterController);

    /* @ngInject */
    function PercenterController() {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "haha";

        activate();
        
        /////
        function activate() {
           // alert("hahahaha");
        }
    }
})();
