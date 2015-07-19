angular.module('myApp', ['ngRoute'])
.constant('ACCESS_LEVELS', {
	pub: 1,
    user: 2
});
//CORs
angular.module('myApp', [])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers
	.common['X-Requested-With'];
});


.config(function($httpProvider) {
// Build our interceptor here
var interceptor =function($q, $rootScope, Auth) { 
	return {
		'response': function(resp) {
			if (resp.config.url == '/api/login') {
				Auth.setToken(resp.data.token);
			}
			return resp;
		},'responseError': function(rejection) {
		// Handle errors
			switch(rejection.status) {
				case 401:
				if (rejection.config.url!=='api/login')
					$rootScope
				.$broadcast('auth:loginRequired');
				break;

				case 403:
				$rootScope
				.$broadcast('auth:forbidden');
				break;

				case 404:
				$rootScope
				.$broadcast('page:notFound');
				break;

				case 500:
				$rootScope
				.$broadcast('server:error');
			}
			return $q.reject(rejection);
		}
	}
}
});

angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, ACCESS_LEVELS) {
$routeProvider
.when('/', {
controller: 'MainController',
templateUrl: 'views/main.html',
access_level: ACCESS_LEVELS.pub
})
.when('/account', {
controller: 'AccountController',
templateUrl: 'views/account.html',
access_level: ACCESS_LEVELS.user
})
.otherwise({
redirectTo: '/'
})
});