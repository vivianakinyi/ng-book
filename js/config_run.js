// angular.module('ConfigApp', [])
// .config(function($provide) {
// });

// angular.module('ConfiApp', [])
// .factory('myFactory', function() {
// 	var service = {};
// 	return service;
// })
// .directive('myDirective', function() {
// 	return {
// 		template: '<button>Click me</button>'
// 	}
// })

// Alternatively
angular.module('ConfigApp', [])
.config(function($provide, $compileProvider) {
	$provide.factory('myFactory', function() {
		var service = {};
		return service;
	});
$compileProvider.directive('myDirective',
	function() {
		return {
			template: '<button>Click me</button>'
		}
	})
});