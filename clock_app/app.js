var app = angular.module('clockApp', []);
app.controller('CurrentTimeController', currentTime);

function currentTime($scope){
  $scope.date = new Date().toTimeString();
  $scope.userName = "";
  $scope.refershTime = function(){
    $scope.date = new Date().toTimeString();
  }
}