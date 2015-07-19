//parsing an expression manually
var app = angular.module('MyApp', []);

app.controller('MyController', function($scope, $parse){
	$scope.$watch('expr', function(newVal, oldVal, scope){
		if (newVal !==oldVal){
			//Set up parse with an expression
			var parseFun = $parse(newVal);

			//Get value of the parsed expression
			$scope.parsedValue = parseFun(scope);
		}
	});

});

app.controller('InterpolateCtrl', function($scope, $interpolate){
	$scope.to = 'viv@gmail.com';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is viv too!';
	//Set up a watch
	$scope.$watch('emailBody', function(body){
		if (body) {
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to});
		}

	});

});

