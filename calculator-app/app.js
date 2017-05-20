var app = angular.module('calcApp', []);
app.controller('CalcOperationController', function(){
  this.result = 0;
  this.operationButtonClick = function(operator){
    this.operator = operator;
  }
  this.equalsButtonClick = function(){
    value1 = parseFloat(this.value1);
    value2 = parseFloat(this.value2);
    switch(this.operator) {
      case "+": 
        this.result = value1 + value2;
        break;
      case "-":
        this.result = value1 - value2;
        break;
      case "*":
        this.result = value1 * value2;
        break;
      case "/":
        this.result = value1 / value2;
        break;
    }
  }
})