describe('Unit: Testing filters', function(){
	var filter;

	beforeEach(module('FilterApp'));
	beforeEach(inject(function($filter){
		filter = $filter;
	}));
	it('should LimitTo 5',
		function(){
			expect(filter('limitTo')(5)).toEqual('5');

	});
});