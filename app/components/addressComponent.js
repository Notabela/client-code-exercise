(function() {
    angular.module('client-code-App', [])
        .component('personAddress', {
                controller: 'ClientController',
                templateUrl: "app/views/address.html",
                // template: '<div> {{people[0].name}}</div>',
                bindings: {
                    address: '='
                }
    
        });

}());