sc_require('models/track');

SevenFi.TRACK_SEARCH_QUERY = SC.Query.local(
	SevenFi.Track,
	{ orderBy: 'name'}
);

SevenFi.TrackSearchDataSource = SC.DataSource.extend(
	/** @scope SevenFi.TrackSearch.prototype */ {
	fetch: function(store, query) {
		console.debug("FETCH");
		
		if (query.parameters != null) {
			var theUrl = this._formatUrl(query);

			console.debug("TRACK SEARCH: <%@1>".fmt(theUrl));

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
		return "/7digital/artist/toptracks?artistid=%@1".fmt(query.parameters.artistId);
	},

	_fill : function(response, store, query) {
		if (SC.ok(response)) {
			this._log("Loading store...");

			// @see: http://wiki.sproutcore.com/DataStore-DataSource+Fetching+Data
			try {
				store.loadRecords(
					SevenFi.Track,
					response.getPath('body').results.results
				);

				this._log("Done.");
			} catch (e) {
				this._log("ERROR %@1".fmt(e.toString()));
			}
		} else {
			this._log("ERROR: There was an error returned from remote server.");
		}
	},

	_log : function(what) {
		console.debug("[SevenFi.SearchDataSource] %@1".fmt(what));
	}
});
