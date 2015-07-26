describe("Testing routes", function(){
	beforeEach(module("myApp"));

	var location, route,rootScope;
	beforeEach(inject(
		function(_$location_, _$route_, _$rootScope_){
			location = _$location_;
			route = _$route_;
			rootScope = _$rootScope_;
		}));
	
	describe("index route", function(){
		beforeEach(inject(function($httpBackend){
			$httpBackend.expectGET("index.html")
			.respond(200, "main HTML");
		}));
		//tests goes here
	it("should load the index page on successful load of /",
		function(){
			location.path("/");
			rootScope.$digest();
			expect(route.current.controller)
			.toBe("MyController")
		});
	it("should redirect to the index path on non-existentent route", 
		function(){
			location.path("/definetely/not/a_route");
			rootScope.$digest();
			expect(route.current.controller)
			.toBe("MyController")
		});
	});
});