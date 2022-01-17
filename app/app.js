(function () {
    var app = angular.module('client-code-App', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider  
            .when('/', 
            {
                controller: 'ClientController',
                templateUrl: 'app/views/people.html'
            })
            .when('/:personId',
            {
                controller: 'personController',
                templateUrl: 'app/views/person.html'
            })
            .otherwise( {redirectTo:'/'} );
    });
}());