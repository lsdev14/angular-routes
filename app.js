angular.module('myApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html'
        })
        .when('/user', {
            templateUrl: 'user'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});