/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.organization')
        .controller('treeController', TreeController);

    /* @ngInject */
    function TreeController() {
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
