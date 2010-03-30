// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/observe.html

module("sevenfi.examples.how.to");

test("How to observe a property on another object using a closure", function() {
	var observable = SC.Object.create({
		isDone : false
	});

	var msg = null;

	observable.addObserver('isDone', this, function() {
		msg = "Observer notified";
		start();
	});

	observable.set('isDone', YES);

	stop();

	ok(YES, msg);
});