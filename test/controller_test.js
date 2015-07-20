describe('Unit tests: Controller', function(){
	var scope;
	var ctrl;

	beforeEach(module('FirstControllerApp'));

	beforeEach(inject(function ($rootScope, $controller ){
		$scope = $rootScope.$new();
		ctrl = $controller('FirstController', {$scope: scope});
	}));

	//tests
	it('should have counter set', function(){
		expect(scope.counter).toBeDefined();

	});
});