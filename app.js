angular.module("myApp", ["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "index.html",
		controller: "MyController"})
	.when ("/login", {
		templateUrl: "login.html",
		controller: "LoginController"
	})
	otherwise({ redirectTo: "/"});
});