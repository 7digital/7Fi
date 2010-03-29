// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-timers.html

test("You can supply a function", function() {
	var timeoutInMilliseconds = 500;
	
	SC.Timer.schedule({
		action : function() {
			console.debug("Done");
			
			ok(YES, "Timer executed after %@1ms".fmt(timeoutInMilliseconds));

			start();
		}, interval : timeoutInMilliseconds
	});

	stop();
});
