// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/controllers/how.to.html

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

	equals(allTasks.length(), 2, "Correct total number of tasks returned");

	// @see: http://wiki.sproutcore.com/DataStore-SCQL
	var tasks = store.find(SC.Query.local(
		SevenFi.Task,
		"isDone = {isDone}",
		{ isDone : YES }
	));

	equals(tasks.length(), 1, "Correct number of unfinished tasks returned");
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
		'	{"guid": "item-1", "isDone":true	, "description":"Take out the garbage"}' +
		']}}'
	);
};
