// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-timers.html

// See: http://docs.sproutcore.com/symbols/SC.Timer.html

test("You can supply a function", function() {
	var timeoutInMilliseconds = 500;
	
	SC.Timer.schedule({
		action : function() {
			ok(YES, "Timer executed after %@1ms".fmt(timeoutInMilliseconds));

			start();
		},
		interval : timeoutInMilliseconds
	});

	stop();
});

test("Or you can supply a target", function() {
	var anyObject = SC.Object.create({
		onTimer : function() {
			ok(YES, "Timer executed after %@1ms".fmt(timeoutInMilliseconds));

			start();
		}
	});

	var timeoutInMilliseconds = 500;

	SC.Timer.schedule({
		target : anyObject,
		action 	: 'onTimer',
		interval : timeoutInMilliseconds
	});

	stop();
});
