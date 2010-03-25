// Run this fixture by browsing to:
// http://localhost:4020/seven_fi/en/current/tests/controllers/how.to.html

sc_require('models/task');
SevenFi.ARTIST_SEARCH_QUERY = SC.Query.remote(
	SevenFi.Artist,
	{ orderBy: 'name'}
);

module("SevenFi.SearchDataSource");

// @see: http://wiki.sproutcore.com/Foundation-Ajax+Requests
// @see: http://wiki.sproutcore.com/DataStore-Your+First+Find
test("How to do an artist search", function() {
	var theUrl = '/7digital/search/artists?q=chubby+jackson';

	var store = SC.Store.create({
		commitRecordsAutomatically: YES
	}).from('SevenFi.SearchDataSource');

	console.log("Starting...");

	var callback = function(response, store, query) {
		if (SC.ok(response)) {
			console.debug("Loading store...");

			try {
				var storeKeys = store.loadRecords(
					SevenFi.Artist,
					response.getPath('body').results.results
				);

				store.loadQueryResults(query, storeKeys);

				var allArtists = store.find(SevenFi.Artist);

				console.debug("Response status was <%@1>".fmt(response.getPath('body').status));
				console.debug("There were supposed to be <%@1> artists fetched".fmt(response.getPath('body').results.count));
				console.debug("There were <%@1> artists found".fmt(allArtists.get('length')));
				console.debug("There were <%@1> artists found".fmt(allArtists.toArray().get('length')));
				console.debug("There first one is <%@1>".fmt(allArtists.objectAt(0)));

				var q = SC.Query.local(SevenFi.Artist, "name = %@", "chubby");
				var chubbyJacksonResults = store.find(q);

				console.debug("Result for chubby jackson <%@1>".fmt(chubbyJacksonResults.objectAt(0)));

			} catch (e) {
				console.debug(e.toString());	
			}

		} else {
			console.debug("ERROR");
		}
	};

	var result = SC.Request.getUrl(theUrl).json().
		notify(this, callback, store, null).
		send();

	console.log(result);
});
