var app = angular.module('modulesApp', ["helloModule", "ngTagsInput"]);

app.controller('tagController', function(){
  this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
});
