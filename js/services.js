var app = angular.module('myApp', []);
//Service() Example
app.service('MathsService',function(){
	 this.multiply = function(a, b) { 
	 	return a * b 
	 };
});

app.service('CalculatorService', function(MathsService){
	this.square = function(a) { 
		return MathsService.multiply(a,a); 
	};
	
});

app.controller('CalculatorCtrl', function($scope, CalculatorService){
	 $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    };
});

// //Factory() Example
// app.factory('PatientService', function($http){
// 	var getPatients = function(){
// 		$http.get('data/data.json')
// 		.success(function(data))
// 	}
// 	return {
// 		getPatientsData: getPatients;
// 	};
	
	
	
// 	// 	getPatients:function(){
// 	// 		return $http({
// 	// 			method : "GET",
// 	// 			url    :"data/data.json"
// 	// 		})
// 	// }
// //}
// });
// // 
// app.controller('patientsCtrl',['$scope','PatientService',
// 	function($scope,PatientService) {
// 		PatientService.getPatientsData()
// 		.then(function(data){
// 			$scope.names = data;
// 		})
// 		// .success(function(data) {
// 		// 	{
// 		// 		$scope.names = data;
// 		// 	}
// 		// })
// 		// .error(function(error) {
// 		// 	$scope.status = 'Unable to load customer data: ' + error.message;
// 		// });

// }]);