
angular.module('superCoolApp')
    .directive('formDir', formDir);
    function navDir() {
        var directive = {
            restrict: 'E',
            templateUrl: 'nav/nav.html'
        };
        return directive;
    }
