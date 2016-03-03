angular.module('todo').controller('TodoCtrl',function($scope, todoService){
  $scope.todos;

  todoService.getTodos().then(function(resp){
    $scope.todos = resp;
  })

  $scope.createTodo = function(){
    var data = {
      item: $scope.newTodo 
    }
    todoService.addTodo(data).then(function(resp){
      $scope.todos.push(data);
      $scope.newTodo = '';
    });
  }

  $scope.markDone = function(todo){
    todoService.markDone(todo).then(function(resp){
      todo.done = true
    });
  }

  $scope.markUndone = function(todo){
    todoService.markUndone(todo).then(function(resp){
      todo.done = false
    });
  }
});
