angular.module('todo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todo').config(function($stateProvider) {

  $stateProvider
    .state('todo', {
      url: '/',
      templateUrl: 'todo/partial/todo/todo.html',
      controller: 'TodoCtrl'
    });
  /* Add New States Above */
});

