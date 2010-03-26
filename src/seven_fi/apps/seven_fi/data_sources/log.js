sc_require('models/logEntry');

SevenFi.LAST_THREE_LOG_ENTRIES = SC.Query.local(
	SevenFi.LogEntry,
	{ orderBy: 'timestamp,desc'}
);

SevenFi.LogDataSource = SC.DataSource.extend(
/** @scope SevenFi.SearchDataSource.prototype */ {
	fetch: function(store, query) {
		if (query.parameters != null) {
			var theUrl = this._formatUrl(query);

			SC.Request.getUrl(theUrl).
				json().
				notify(this, '_fill', store, query).
				send();

			return YES;
		}

		return NO;
	},

	retrieveRecord: function(store, storeKey) {
		return NO;
	},

	createRecord: function(store, storeKey) {
		return NO;
	},

	updateRecord: function(store, storeKey) {
		return NO;
	},

	destroyRecord: function(store, storeKey) {
		return NO;
	}
});