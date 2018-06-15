var app = angular.module('indexApp');
app.controller('testController', function ($scope, apiService, $timeout, $location) {
  $scope.userName = '';
  $scope.pwd = '';

  $scope.callApi = () => {
    let data = {
      userName: $scope.userName,
      pwd: $scope.pwd
    }
    apiService.callLogin(data).then(function (resdata) {
      console.log('its working;')
      console.log(resdata);
      if (resdata.status === 200) {
        $timeout(() => {
          console.log('2nd');
          localStorage.setItem("userId", resdata.data.userId);
          localStorage.setItem("userName", resdata.data.userName);
          localStorage.setItem("email", resdata.data.userEmail);
          $location.path("/dashboard");
        }, 3000);
        console.log('first');
        $scope.loginSuccess = 1;
        $scope.$digest();
      } else {
        $timeout(() => {
          console.log('2nd');
          $scope.loginSuccess = null;
          console.log($scope.loginSuccess);
        }, 3000);
        console.log('first');
        $scope.loginSuccess = 0;
        $scope.$digest();
        console.log($scope.loginSuccess);
      }
    })

  }

  // $scope.callLogin = function () {
  //   console.log('function called');
  //   console.log($scope.userName);
  //   console.log($scope.pwd);

  //   $http.post("http://localhost:3000/userLogin", { userName: $scope.userName, pwd: $scope.pwd }).then(function (response) {
  //     console.log(response.data);
  //     $scope.responseData = response.data;
  //     if (response.data.status === 200) {
  //       $timeout(() => {
  //         console.log('2nd');
  //         localStorage.setItem("userId", response.data.data.userId);
  //         localStorage.setItem("userName", response.data.data.userName);
  //         localStorage.setItem("email", response.data.data.userEmail);
  //         $location.path("/dashboard");
  //       }, 3000);
  //       console.log('first');
  //       $scope.loginSuccess = 1;
  //     } else {
  //       $timeout(() => {
  //         console.log('2nd');
  //         $scope.loginSuccess = null;
  //       }, 3000);
  //       console.log('first');
  //       $scope.loginSuccess = 0;
  //     }
  //   });
  // }
});
