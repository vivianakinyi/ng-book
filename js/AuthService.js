"use strict";
angular.module( "emr.auth.services",["emr.common.services"])
.factory("emr.auth.services.Authenticate", function($cookieStore, ACCESS_LEVELS){
	var _user = $cookieStore.get("user");

	var setUser = function(user){
		if (!user.role || user.role < 0){
			user.role = ACCESS_LEVELS.pub;
		}
		_user = user;
		$cookieStore.put("user", _user);
	};
	return {
		isAuthorized: function(lvl){
			return _user.role >= lvl;
		},
		setUser : setUser,
		isLoggedIn: function(){
			return _user ? true : false;
		},
		getUser: function(){
			return _user;
		},
		logout: function (){
			$cookieStore.remove("user");
			_user = null;
		}
	};
});

.run(["$rootScope", "$state","emr.auth.services.Authenticate",
	function($rootScope, $state, Authenticate){
	$rootScope.$on("$stateChangeStart",
		function (evt, next, curr){
		if (!Authenticate.isAuthorized(next.$$route.access_levels)){
			if(Authenticate.isLoggedIn()){
				$state.go("/");
			} else {
				$state.go("login");
			}
		}
	});
}])