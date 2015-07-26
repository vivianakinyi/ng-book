var app = angular.module("myApp", ["ui-router"]);

app.controller("WizardSignUpController",function($scope, $state){
	$scope.user = {};
	$scope.signup = function() {};

});
app.config(function($stateProvider, $urlRouterProvider){
	//when takes two param: one we want to match and redirect path 
	//eg. if empty, redirect to login
	$urlRouterProvider.when("", "/login");

	$stateProvider
	.state('wizard', {
		controller: 'WizardSignupController',
		abstract: true,
		url: '/wizard',
		template: '<div><div ui-view></div></div>'
	})

	.state('wizard.start', {
		url: '/step_1',
		template: '<div><div ui-view><input type="text">Enter your name</input></div></div>'
	})
	.state('wizard.email', {
		url: '/step_2',
		template: '<div><div ui-view><input type="email">Enter your email</input></div></div>'
	})
	.state('wizard.finish', {
		url: '/finish',
		template: '<div><div ui-view><button ng-click="signup()">Click to finish</button</div></div>',
		controller: function ($scope){
			$scope.signup();
		}
	});

});
