var app = angular.module('moreDirectiveApp', []);
app.controller('moreDirectiveController', function(){
  this.users = [ 
    {name: "name1", age: "20"},
    {name: "name2", age: "40"},
    {name: "name3", age: "60"},
    {name: "name4", age: "70"},
    {name: "name5", age: "80"},
    {name: "name6", age: "90"},
  ];
})