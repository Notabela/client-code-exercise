import 'angular';
import ngRoute from 'angular-route';

import './components/addressComponent.js';
import './directives/rowDirective.js';
import ClientController from './controllers/ClientController.js';
import './controllers/personController.js';
import './styles/styles.css';

var app = angular.module('client-code-App', ['ngRoute']);

console.log(app);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: ClientController,
                templateUrl: 'app/views/people.html'
            })
        .when('/:personId',
            {
                controller: 'personController',
                templateUrl: 'app/views/person.html'
            })
        .otherwise({ redirectTo: '/' });
});

app.$inject = ['ngRoute', ngRoute];