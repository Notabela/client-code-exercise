(function() {
    var peopleService = function($http) {

        this.getPeople = function() {
            return $http.get("http://jsonplaceholder.typicode.com/users");
        };
    }
    peopleService.$inject = ['$http'];

    angular.module('client-code-App', []).service('peopleService', peopleService);


}());