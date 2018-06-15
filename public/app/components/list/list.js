var app = angular.module('indexApp');
app.controller('listController', function ($scope) {
    $scope.text = 'This is list page';
    $scope.searchText = '';
    $scope.userDetails = [{
      id: 1,
      name: 'pankaj',
      email: 'pankajsaw1122@gmail.com',
      dob: new Date('06/11/1993'),
    },
    {
      id: 2,
      name: 'Sumit',
      email: 'sumit12@gmail.com',
      dob: new Date('01/15/1994'),
    },
    {
      id: 3,
      name: 'sanjeev',
      email: 'sanjeev@gmail.com',
      dob: new Date('10/25/1995'),
    },
    {
      id: 4,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      dob: new Date('08/16/1996'),
    },
    {
      id: 5,
      name: 'Bipin',
      email: 'bipin@gmail.com',
      dob: new Date('05/30/1991')
    },
    ]
  });