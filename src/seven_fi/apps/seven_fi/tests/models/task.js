var _store;

module("SevenFi.Task", {
	setup : function() {
		_store = SC.Store.create({
			commitRecordsAutomatically: NO
		}).from('SevenFi.SearchDataSource');
	}
});

var ALL_ARTISTS_ORDERED_BY_NAME = SC.Query.local(
	SevenFi.Artist,
	{ orderBy: 'name'}
);

test("Can run a find query", function() {
	var controller = SC.ArrayController.create({});
	var done = NO;
	
	controller.addObserver('length', this, function() {
		var length = controller.get('length');

		if (length > 0 && done === NO) {
			done = YES;
			
			start();

			ok(length > 0, "<%@1> artist results returned".fmt(length));			
		}
	});

	var query = anExampleQuery();

	// This part attaches content to a specific array -- even though it is currently empty
	controller.set('content', _store.find(SevenFi.Artist));

	// And this part populates the store, and with it the result of
	var result = _store.find(query);

	stop();
});

var anExampleQuery = function() {
	return SC.Query.local(
		SevenFi.Artist,
		"name = {name}",
		{ name : 'popa chubby'},
		{ orderBy: 'name'}
	);	
};

