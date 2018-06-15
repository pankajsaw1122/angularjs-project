var app = angular.module('indexApp');
app.service('passDataService', function () {
    var data = '';
    this.sendData = function (sdata) {
        console.log('send data called');
        console.log(sdata);
         data = sdata;
    }
    this.receiveData = function () {
        console.log('receive data called');
        console.log(data);
        return data;
    }
});