import * as angular from 'angular';

(function() {
    var ClientController = function ($scope, peopleService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.people = [];

        function init() {
            peopleService.getPeople()
                .success(function(people) {
                    $scope.people = people;
                })
                .error(function(status) {
                    console.log("Error:" + status);
                });
        }
        init();
    };

    // Solves script minification process
    ClientController.$inject = ['$scope', 'peopleService'];

    angular.module('client-code-App', [])
        .controller("ClientController", ClientController);
}());