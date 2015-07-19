it('should have a sign up button', function() {
	browser().navigateTo('/#/');
	expect(
		element("a#login").html()
		).toEqual("Try it! Sign in");
});
