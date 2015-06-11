/**
 * Created by fabiolombardi on 12/05/15.
 */
'use strict';

angular.module('myApp.todos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todos', {
    templateUrl: 'todos/todos.html',
    controller: 'ToDosCtrl'
  });
}])

.controller('ToDosCtrl', [function($scope, $http) {
    $scope.todos = null;
    $scope.formData = {};

    $http.get('/api/todos')
        .success(function(data){
            $scope.todos = data;
            console.log(data);
        })
        .error(function(error){
             console.log('Error : ' + error);
        });

    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data){
                $scope.todos = data;
                console.log(data);
            })
            .error(function (error) {
                console.log('Error while creating the task');
            })
    };

    $scope.deleteTodo = function(id){
        $http.delete('/api/todos/' + id)
            .success(function(data){
                $scope.todos = data;
                console.log(data);
            })
            .error(function(error){
                console.log('Error while deleting the task')
            });
    }
}]);