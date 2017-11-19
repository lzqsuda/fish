/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.welcome')
        .controller('welcomeController', WelcomeController);

    /* @ngInject */
    function WelcomeController(exception) {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "haha";

        activate();
        
        /////
        function activate() {
            //toastr.info('Are you the 6 fingered man?');
           // exception.catcher("hahaha");
        }
    }
})();

