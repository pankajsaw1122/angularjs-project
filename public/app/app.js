// create the module and name it scotchApp
var app = angular.module('indexApp', ['ngRoute']);
// configure our routes
app.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      templateUrl: "components/test/test.html",
      controller: 'testController'
    })
      .when('/dashboard', {
        templateUrl: "components/dashboard/dashboard.html",
        controller: 'dashboardController'
      }).when('/about', {
        templateUrl: "components/about/about.html",
        controller: 'aboutController'
      }).when('/list', {
        templateUrl: "components/list/list.html",
        controller: 'listController'
      })
  }
]);

