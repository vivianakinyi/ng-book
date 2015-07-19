angular.module('restangularApp', [])
.factory('UserService',['Restangular',
	function(Restangular) {
		var searches = Restangular.allUrl('one', 'http://google.com/');
// Will send a request to GET http://google.com/
searches.getList();

var singleSearch =
Restangular.oneUrl('betaSearch', 'http://beta.google.com/1');


}]);