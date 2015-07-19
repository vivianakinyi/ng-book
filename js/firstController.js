var app = angular.module('FirstControllerApp', []);

app.controller('FirstController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount){ 
		$scope.counter += amount;
	};
	$scope.subtract = function(amount) {
		$scope.counter -= amount;
	};

});

//Controller to show scope hierarchy
app.controller('ParentController', function($scope){
	$scope.person = { greeted: true };
});

app.controller('ChildController', function($scope){
	$scope.sayHello = function() {
		$scope.person.name = "Vivian Akinyi";
	}
});

