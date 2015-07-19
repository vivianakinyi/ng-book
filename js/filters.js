var app = angular.module('FilterApp', []);

// Custom FilterApp
app.filter('capitalize', function(){
	return function(input) {
		if (input)
			return input[0].toUpperCase() +
				input.slice(1);

	}
});
app.filter('reverse', function(){
	return function(input){
		input = input || '';
    	var out = "";
    	for (var i = 0; i < input.length; i++) {
     		 out = input.charAt(i) + out;
    	}
    	return out;
	}
});


app.controller('TimeController', function($scope, $timeout){
	$scope.clock = {};
	var updateClock = function() {
		$scope.clock.now = new Date();
		$timeout(function (){
			updateClock();
		}, 1000);
	};
	updateClock();
});

app.controller('BuiltInFilters', function($scope){
	$scope.string = "These are filters."
});

