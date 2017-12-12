describe("Test zoo side of input field on home page", function () {
	it ("To test input field and check the text output", function () {
		browser.get("http://www.thetestroom.com/jswebapp");
		element(by.model("person.name")).sendKeys("I will survive!");	
		element(by.binding("person.name")).getText().then(function (text) {
			console.log(text);
		});
	});
});