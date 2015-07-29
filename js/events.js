angular.module("myApp",[])
.controller("MyController",
	function($scope, $timeout){
		$scope.message = "Waiting 2000ms for update";
		$timeout(function(){
			$scope.$apply(function (){
				$scope.message = "Timeout called!";
			});
		}, 2000);

	});
// .controller("MyController", ['$scope', '$timeout'
// 	function($scope, $timeout) {
// 		$scope.message = "Waiting 2000ms for update";
// 		setTimeout(function () {
// 			$scope.$apply(function () {
// 				$scope.message = "Timeout called!";
// 			});
// 		}, 2000);
// 	}
	// $scope.$watch('full_name', function (newVal, oldVal, scope) {
	// 	if(newVal == oldVal){
	// 		$scope.message = "Waiting 200ms for update...";
	// 	} else {
	// 		setTimeout(function(){
	// 			$scope.$apply(function {
	// 				$scope.message = "Timeout called";
	// 			});
	// 		}, 2000);
			
	// 	}

	// });

