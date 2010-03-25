// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/controllers/how.to.html

sc_require('models/task');
module("SevenFi.SearchDataSource");

// @see: http://wiki.sproutcore.com/Foundation-Ajax+Requests
// @see: http://wiki.sproutcore.com/DataStore-Your+First+Find
test("How to load json into a store of SevenFi.Artist objects", function() {
	var theUrl = '/7digital/search/artists?q=chubby+rain';

	var callback = function(response, store, query) {
		if (SC.ok(response)) {
			console.debug("Loading store...");
			
			var storeKeys = store.loadRecords(
				SevenFi.Artist,
				response.getPath('body').results.results
			);

			console.debug("Loaded <%@1> store keys".fmt(storeKeys.get('length')));

			equals(50, storeKeys.get('length'), "Expected 50 results to be returned.");
		} else {
			console.debug("ERROR");
		}
	};

	var dummyStore = SC.Store.create({});

	var result = SC.Request.getUrl(theUrl).json().
		notify(this, callback, dummyStore, null).
		send();
});

test("How to query a store", function() {
	var store = SC.Store.create({});

	var exampleJson = JSON.parse(
		'{"status":"OK","results":{"results":[' +
		'	{"name":"Popa Chubby","id":"54520","picture_url":"http://xxx.jpg"},' +
		'	{"name":"Chubby Bat","id":"54521","picture_url":"http://xxx.jpg"}' +
		']}}'
	);

	var keys = store.loadRecords(
		SevenFi.Artist,
		exampleJson.results.results
	);

	console.debug("Store contains <%@1> items".fmt(keys.length));

	var query = SC.Query.local(
		SevenFi.Artist,
		"name = {name}",
		{ name : 'Popa Chubby'},
		{ orderBy: 'name'}
	);

	var results = store.find(query);

	var actualResultCount = results.length();

	var theSearchResult = results.objectAt(0);

	equals(1, actualResultCount);
	equals(theSearchResult.get('id'), 54520);
});
