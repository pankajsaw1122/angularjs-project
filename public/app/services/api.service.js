var app = angular.module('indexApp');
app.service('apiService', function ($http) {
    this.callLogin = async function (data) {
        let result = '';
        console.log(data);
        console.log('callLogin api worked');
        await $http.post("http://localhost:3000/userLogin", data).then(function (response) {
            result = response.data;
        })
        return result;
    }
});