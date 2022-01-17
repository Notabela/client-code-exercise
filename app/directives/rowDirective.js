(function() {
    angular.module('client-code-App')
        .directive('rowDirective', function() {
            return {
                // scope: {
                //     list:'='
                // },
                // templateUrl: "app/views/list-table.html"
                // template: '<tr> <td> {{ list }} </td></tr> '
                templateUrl: "app/views/test.html"
            };
    
        });

}());