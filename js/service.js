// Create the angular module
var toDoApp = angular.module("toDoApp", []);

// Define the controller in the angular module
toDoApp.controller("toDoController", ["$scope", function($scope) {
	$scope.empty = ("All done for the day! See whats on the agenda tomorrow...");
	$scope.tasks = [
		{"name": "Feed the dogs", "done": false}, 
		{"name": "Take the garbage out", "done": false},
	];
	$scope.getTotalTasks = function() {
		return $scope.tasks.length;
	}
	$scope.clearCompleted = function() {
		$scope.tasks = _.filter($scope.tasks, function(task) {
			return !(task.done);
		});
		if ($scope.tasks == []) {

		}
	}
	$scope.addTask = function() {
		$scope.tasks.push({"name": $scope.newTaskName, "done": false});
		$scope.newTaskName = "";
	}	
	$scope.isEmpty = function() {
		return $scope.getTotalTasks() == 0;
	}
}]);
