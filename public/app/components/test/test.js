var app = angular.module('indexApp');
app.controller('testController', function ($scope, $http, passdata, $timeout, $location) {
  $scope.userName = '';
  $scope.pwd = '';

  $scope.callLogin = function () {
    console.log('function called');
    console.log($scope.userName);
    console.log($scope.pwd);

    $http.post("http://localhost:3000/userLogin", { userName: $scope.userName, pwd: $scope.pwd }).then(function (response) {
      console.log(response.data);
      $scope.responseData = response.data;
      if (response.data.status === 200) {
        $timeout(() => {
          console.log('2nd');
          localStorage.setItem("userId", response.data.data.userId);
          localStorage.setItem("userName", response.data.data.userName);
          localStorage.setItem("email", response.data.data.userEmail);
          $location.path("/dashboard");
        }, 3000);
        console.log('first');
        $scope.loginSuccess = 1;
      } else {
        $timeout(() => {
          console.log('2nd');
          $scope.loginSuccess = null;
        }, 3000);
        console.log('first');
        $scope.loginSuccess = 0;
      }
    });
  }
});

   // $scope.callApi = async function () {
  //   let data = {
  //     userName: $scope.userName,
  //     pwd: $scope.pwd
  //   }
  //   $scope.result = await passdata.callLogin(data);
  //   console.log('result  = ');
  //   console.log($scope.result);
  //   if ($scope.result.status === 200) {
  //     $timeout(() => {
  //       console.log('2nd');
  //       localStorage.setItem("userId", $scope.result.data.userId);
  //       localStorage.setItem("userName", $scope.result.data.userName);
  //       localStorage.setItem("email", $scope.result.data.userEmail);
  //       $location.path("/dashboard");
  //     }, 3000);
  //     console.log('first');
  //     loginSuccess = 1;
  //   } else {
  //     $timeout(() => {
  //       console.log('2nd');
  //       $scope.loginSuccess = null;
  //       console.log($scope.loginSuccess);
  //     }, 3000);
  //     console.log('first');
  //     $scope.loginSuccess = 0;
  //     console.log($scope.loginSuccess);
  //   }
  // }