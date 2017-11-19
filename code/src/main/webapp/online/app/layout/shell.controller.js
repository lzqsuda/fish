(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('shell', Shell);

    /* @ngInject */
    function Shell() {
        var vm = this;
        vm.a = 0;
        activate();
        ///
        function activate() {
            window.location = '#';
        }
    }
})();
