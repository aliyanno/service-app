// Create the angular module
var weatherApp = angular.module("weatherApp", []);

// Define the controller in the angular module
weatherApp.controller("weatherCtrl", function($scope, $http) 
	{
		$http.jsonp('http://api.wunderground.com/api/f6ce547b83755842/conditions/q/CA/San_Francisco.json?callback=JSON_CALLBACK').success(function(data) {
			$scope.weather = data.current_observation;
		});
		// $scope.zip = "";
		// conditionCurrent.getWeatherConditions().success(function(data) {
		// 	$scope.weatherStatus = data.weather;
		// 	$scope.icon = data.icon_url;
		// });
	// $scope.weatherStatus = "Sunny";
	// $scope.icon = "http://icons.wxug.com/i/c/k/clear.gif"
});

// weatherApp.factory("conditionCurrent", function($http) {
// 	return {
// 		getWeatherConditions: function() {
// 			var url = "http://api.wunderground.com/api/f6ce547b83755842/conditions/q/CA/San_Francisco.json";
// 			return $http.get(url);
// 		}
// 	};
// });
