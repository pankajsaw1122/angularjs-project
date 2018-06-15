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

app.service('passdata', function ($http) {
  this.getData = function () {
    return {
      name: "abc",
      age: 15
    }
  }
  // this.callLogin = async function(data) {
  //   var result = '';
  //   console.log(data);
  //   console.log('callLogin api worked');
  //  await $http.post("http://localhost:3000/userLogin", data).then(function (response) {
  //    result = response.data;
  //   })
  //   return result;
  // }
});
