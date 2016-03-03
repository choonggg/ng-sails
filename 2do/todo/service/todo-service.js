angular.module('todo').factory('todoService',function($http, $q) {
  var baseUrl = 'http://localhost:1337',
      defer = $q.defer();

  return {
    getTodos: function(){
      $http.get(baseUrl + '/todo').success(function(resp){
        defer.resolve(resp);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise;
    },

    addTodo: function(todo){
      $http.post(baseUrl + '/todo', todo).success(function(resp){
        defer.resolve(resp);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise;
    },

    markDone: function(todo){
      $http.put(baseUrl + '/todo/markDone', todo).success(function(resp){
        defer.resolve(resp)
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise;
    },

    markUndone: function(todo){
      $http.put(baseUrl + '/todo/markUndone', todo).success(function(resp){
        defer.resolve(resp)
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});
