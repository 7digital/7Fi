// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/examples/how.to/use-stores.html

sc_require('models/task');
module("SevenFi.SearchDataSource.Examples");

// @see: http://wiki.sproutcore.com/Foundation-Ajax+Requests
// @see: http://wiki.sproutcore.com/DataStore-Your+First+Find
test("How to load json into a store of SevenFi.Artist", function() {
	var store = newFakeStore();

	ok(store != null, "Store loaded from in-memory json");
});

test("How to query an SevenFi.Artist store", function() {
	var store = newFakeStore();

	var query = SC.Query.local(
		SevenFi.Artist,
		"name = {name}",
		{ name : 'Popa Chubby'},
		{ orderBy: 'name'}
	);

	var results 			= store.find(query);
	var actualResultCount 	= results.length();
	var theSearchResult 	= results.objectAt(0);

	equals(1, actualResultCount, "Correct number of results returned");
	equals(theSearchResult.get('id'), 54520, "The expected record returned");
});

test("How to tell how many records are in a store", function() {
	ok(true, "@pending");
});

test("There is one store for the application, and it exposes different data types", function() {
	var store = newFakeStore();
	
	var allTasks = store.find(SC.Query.local(SevenFi.Task));

	equals(allTasks.length(), 3, "Correct total number of tasks returned");

	// @see: http://wiki.sproutcore.com/DataStore-SCQL
	var tasks = store.find(SC.Query.local(
		SevenFi.Task,
		"isDone = {isDone}",
		{ isDone : NO }
	));

	equals(tasks.length(), 1, "Correct number of unfinished tasks returned");
	equals(
		tasks.objectAt(0).get('description'), 'Kill Austin Powers',
		"Correct unfinished task returned"
	);
});

test("How to add new items to a store, for example a log store", function() {
	var logStore = SC.Store.create({
		commitRecordsAutomatically : NO
	});

	logStore.createRecord(SevenFi.LogEntry, {
		guid 		: '1',
		message 	: 'This is a test log message',
		timestamp 	: SC.DateTime.create()
	});

	var results = logStore.find(SC.Query.local(SevenFi.LogEntry));

	equals(results.length(), 1, "Correct number of log entries returned");

	var theEntry = logStore.find(
		SC.Query.local(
			SevenFi.LogEntry,
			"guid = {guid}",
			{ guid : '1' }
		)
	).objectAt(0);

	equals(
		theEntry.get('message'), 'This is a test log message',
		"Able to find the log entry just added"
	);
});

test("Monitor a store for changes by observing its length", function(){
	var store = SC.Store.create({});
	var resultsFuture = store.find(SevenFi.Artist);
	var message;

	resultsFuture.addObserver('length', this, function() {
		message = "Done";
		start();
	});

	store.createRecord(SevenFi.Artist, {
		id		: '12',
		name	: 'Anything'
	});

	stop();

	var numberOfRecords = resultsFuture.get('length');

	ok(numberOfRecords === 1, "Store contains <%@1> records as expected (%@2)".fmt(numberOfRecords, message))
});

var newFakeStore = function() {
	var artistStore = SC.Store.create({});

	artistStore.loadRecords(
		SevenFi.Artist,
		someArtistJson().results.results
	);

	artistStore.loadRecords(
		SevenFi.Task,
		someTaskJson().results.results
	);

	return artistStore;
};

var someArtistJson = function() {
	return JSON.parse(
		'{"status":"OK","results":{"results":[' +
		'	{"name":"Popa Chubby"	,"id":"54520"	,"picture_url":"http://xxx.jpg"},' +
		'	{"name":"Chubby Bat"	,"id":"54521"	,"picture_url":"http://xxx.jpg"}' +
		']}}'
	);
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
