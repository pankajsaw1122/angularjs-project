var app = angular.module('indexApp');
app.controller('aboutController', function ($scope, passDataService) {
    $scope.text = 'This is About page';
    $scope.passedObj = passDataService.sendData($scope.text);
    console.log($scope.passedObj);
  });