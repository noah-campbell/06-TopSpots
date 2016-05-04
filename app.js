var app = angular.module('app', []);
app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    activate();
    function activate() {
    	$http(
    	{
    		method: 'GET',
    		url: '/topspots.json'
    	}).then(function (response) {
		$scope.spots = response.data;
	});
   }
}]);