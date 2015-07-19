angular.module('HttpApp', [])
.controller('patientsCtrl', 
	function($scope, $http){
		$http.get("data/data.json")
		// .success(function(response) {
		// 	{$scope.names = response.records;}
		// })
		.success(function(data) {
			{
				$scope.names = data;}
			})
		.error(function(response) {
			console.log("Could not fetch data");
	});

});

// $http({
// method: 'GET',
// url: 'data/patients.json'
// }).success(function(data) {
// 	{
// 		$scope.names = data;}
// }).error(function(response) {
// console.log("Could not fetch data");
// });
// });