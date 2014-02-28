// Create the angular module
var weatherApp = angular.module("weatherApp", ['ngResource']);

// Define the controller in the angular module

weatherApp.controller("weatherCtrl", ["$scope", "currentConditions", function($scope, currentConditions)  {
	$scope.zip = 94117;
	$scope.getLocation = function() {
		currentConditions.getWeather($scope.zip)
		.success(function(data) {
 			if (!data.response.error) {
 				$scope.weather = data.current_observation;
 				$scope.showWeather = true;
 			}
		})
	};

}]);

weatherApp.factory("currentConditions", ["$http", function($http) {
	return {
		getWeather: function(zip) {
			return $http({method: "JSONP", url: "http://api.wunderground.com/api/f6ce547b83755842/conditions/q/" + zip + ".json?callback=JSON_CALLBACK",})
		}
	};
}])
