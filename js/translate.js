var app = angular.module('myApp', ['pascalprecht.translate']);
app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		'TITLE': 'Hello',
    	'FOO': 'Welcome to Kenya',
    	BUTTON_TEXT_EN: 'english',
		BUTTON_TEXT_DE: 'swahili'
    });
     
    $translateProvider.translations('swa', {
    	'TITLE': 'Habari',
    	'FOO': 'Karibu Kenya',
    	BUTTON_TEXT_EN: 'english',
		BUTTON_TEXT_DE: 'swahili'
    });
     
    $translateProvider.preferredLanguage('en');
}]);

app.controller('TranslateController', function($translate, $scope) {
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};
});