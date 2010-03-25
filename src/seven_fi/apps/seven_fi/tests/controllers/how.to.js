// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/controllers/how.to.html

sc_require('models/task');
module("SevenFi.SearchDataSource.Examples");

// @see: http://wiki.sproutcore.com/Foundation-Ajax+Requests
// @see: http://wiki.sproutcore.com/DataStore-Your+First+Find
test("How to load json into a store of SevenFi.Artist", function() {
	var store = newFakeArtistStore();

	ok(store != null, "Store loaded from in-memory json");
});

test("How to query an SevenFi.Artist store", function() {
	var store = newFakeArtistStore();

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

var newFakeArtistStore = function() {
	var artistStore = SC.Store.create({});

	var exampleJson = JSON.parse(
		'{"status":"OK","results":{"results":[' +
		'	{"name":"Popa Chubby"	,"id":"54520"	,"picture_url":"http://xxx.jpg"},' +
		'	{"name":"Chubby Bat"	,"id":"54521"	,"picture_url":"http://xxx.jpg"}' +
		']}}'
	);

	artistStore.loadRecords(
		SevenFi.Artist,
		exampleJson.results.results
	);

	return artistStore;
};
