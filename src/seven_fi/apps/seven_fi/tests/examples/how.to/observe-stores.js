// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/observe-stores.html

sc_require('models/task');
module("SevenFi.Examples");

// @see: http://wiki.github.com/sproutit/sproutcore/sproutcore-s-modern-model-layer-part-2
test("How to observe changes in a store and publish the results", function() {
	ok(YES, "@pending");
});

test("How to observe a property on another object using a closure", function() {
	var observable = new SC.Object({
		isDone : false
	});

	var okay = false;
	var msg = null;
	
	observable.addObserver('isDone', observable, function() {
		msg = "Observer notified";
		okay = YES;
	});

	observable.set('isDone', YES);

	// TODO: make this an async test, @see: http://docs.jquery.com/QUnit/asyncTest#nameexpectedtest
	while (!okay) { }

	ok(YES, msg);
});

var newController = function() {
	return null;
};

var newStore = function() {
	var artistStore = SC.Store.create({});

	artistStore.loadRecords(
		SevenFi.Task,
		someTaskJson().results.results
	);

	return artistStore;
};

var someTaskJson = function() {
	return JSON.parse(
		'{"status":"OK","results":{"results":[' +
		'	{"guid": "item-0", "isDone":false	, "description":"Kill Austin Powers"},' +
		'	{"guid": "item-1", "isDone":true	, "description":"Take out the garbage"},' +
		'	{"guid": "item-2", "isDone":true	, "description":"Get Otto out"}' +
		']}}'
	);
};
