sc_require('models/task');

SevenFi.ARTIST_SEARCH_QUERY = SC.Query.local(
	SevenFi.Artist,
	{ orderBy: 'name'}
);

SevenFi.SearchDataSource = SC.DataSource.extend(
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
	},

	_formatUrl : function(query) {
		 return "/7digital/search/artists?q=%@1".fmt(query.parameters.name);
	},

	_fill : function(response, store, query) {
		if (SC.ok(response)) {
			this._log("Loading store...");
			
			// @see: http://wiki.sproutcore.com/DataStore-DataSource+Fetching+Data
			try {
				var storeKeys = store.loadRecords(
					SevenFi.Artist,
					response.getPath('body').results.results
				);

				// @see: http://docs.sproutcore.net/symbols/SC.Store.html#SC.Store#loadQueryResults
				// this ONLY applies when {query} argument is remote
				//store.loadQueryResults(query, storeKeys);
			} catch (e) {
				this._log("ERROR %@1".fmt(e.toString()));
			}

		} else {
			this._log("ERROR");
		}
	},
	
	_log : function(what) {
		console.debug("[SevenFi.SearchDataSource] %@1".fmt(what));
	}
});