var app = angular.module('nestedCtrl', []);
// app.controller('ctrl1', function($scope){
//   $scope.testProp = "inside ctrl 1";
// });
// app.controller('ctrl2', function($scope){
//   $scope.testProp = "inside ctrl 2";
// });

app.controller('ctrl1', function(){
  this.testProp = "inside ctrl 1";
});
app.controller('ctrl2', function(){
  this.testProp = "inside ctrl 2";
});
