// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/observe-stores.html

sc_require('models/task');
module("SevenFi.Examples");

// @see: http://wiki.github.com/sproutit/sproutcore/sproutcore-s-modern-model-layer-part-2
test("How to observe changes in a store and publish the results", function() {
	ok(YES, "@pending: consider observing changes in length. ");

//	var store = newStore();
//
//	store.addObserver('length', function() {
//		ok(YES, "Done");
//
//		start();
//	});
//
//	store.createRecord(SevenFi.Task, {
//		guid 	: "1",
//		isDone	: false,
//		description : "None"
//	});
//
//	stop();
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
