var app = angular.module('indexApp');
app.controller('aboutController', function ($scope, passdata) {
    $scope.text = 'This is About page';
    $scope.passedObj = passdata.getData();
    console.log($scope.passedObj);
  });