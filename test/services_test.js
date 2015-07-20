describe('Unit test: Services', function(){
	beforeEach(module('myApp'));

	var mathService
	beforeEach(inject(function(_MathsService_){
		mathService = _MathsService_;
	}));
});