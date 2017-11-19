/**
 *  View1 Controller
 *
 * Description
 */
(function() {
    'use strict';

    angular
        .module('app.meet')
        .controller('addController', AddController);

    /* @ngInject */
    function AddController(exception, locales,toastr) {
        /*jshint validthis: true */
        var vm = this;
        vm.name = "haha";

        activate();

        /////
        function activate() {
            toastr.info('Are you the 6 fingered man?' + locales.sex.man);
            exception.catcher("exception hahah");

        }
    }
})();
