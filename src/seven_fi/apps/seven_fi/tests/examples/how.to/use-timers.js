// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-timers.html

var timer;

// See: http://docs.sproutcore.com/symbols/SC.Timer.html
module("sevenFi.examples.how.to", {
	setup 	: function() {},
	teardown: function() {
		if (timer != null) {
			timer.invalidate();
			timer.destroy();
			timer = null;
		}
	}
});

test("You can supply a function", function() {
	var timeoutInMilliseconds = 500;
	
	timer = SC.Timer.schedule({
		action : function() {
			ok(YES, "Timer executed after %@1ms".fmt(timeoutInMilliseconds));

			start();

			timer.invalidate();
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

			timer.invalidate();
		}
	});

	var timeoutInMilliseconds = 500;

	timer = SC.Timer.schedule({
		target : anyObject,
		action 	: 'onTimer',
		interval : timeoutInMilliseconds
	});

	stop();
});

test("Those two timers seem to interfere, why?", function() {
	ok(YES, "@pending");
});
