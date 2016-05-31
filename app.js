var app = angular.module('productionApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
                url: '/',
                templateUrl: 'views/list.html',
                controller: 'mainCtrl'
        })

})
