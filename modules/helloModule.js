var helloModule = angular.module('helloModule', []);
helloModule.controller('helloController', function(){
  this.message = "Hello from helloModule!"
});