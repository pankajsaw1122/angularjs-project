var app = angular.module('indexApp');
app.controller('dashboardController', function ($scope, passDataService) {
    $scope.text = 'This is Dashboard';
    $scope.checkdata = passDataService.receiveData();
    console.log( $scope.checkdata);
  });