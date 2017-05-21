var app = angular.module('todoApp', []);

app.controller('todoController', function(){
  this.editMode = false;
  this.todos = [
    "hello",
    "world"
  ];

  this.addTodo = function(){
    this.todos.push(this.newTodo);
    this.newTodo = "";
  }

  this.triggerEdit = function(){
    this.editMode = !this.editMode
  }

  this.deleteTodo = function(index){
    this.todos.splice(index, 1);
  }

});
