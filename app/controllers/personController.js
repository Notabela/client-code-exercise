(function() {
    var personController = function ($scope, $routeParams) {

        var personId = $routeParams.personId;
        $scope.person = null;
        $scope.customers = [];

        function init() {
            
        }

        init()
        
    };

    // Solves script minification process
    personController.$inject = ['$scope', '$routeParams'];

    angular.module('client-code-App')
        .controller("personController", personController);
}());