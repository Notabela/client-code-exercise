import * as angular from 'angular';
import peopleService from '../services/peopleService.js';

var ClientController = function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.people = [];

    let pS = new peopleService();
    function init() {
        pS.getPeople().then(res => res.json())
            .then(function (people) {
                $scope.$apply(function () {
                    $scope.people = people;
                    console.log(people);
                });

            })
            .catch(function (status) {
                console.log("Error:" + status);
            });
    }
    init();
};

// Solves script minification process
ClientController.$inject = ['$scope']

export default ClientController;