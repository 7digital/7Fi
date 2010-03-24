sc_require('models/task');
SevenFi.ARTIST_SEARCH_QUERY = SC.Query.local(
	SevenFi.Artist,
	{ orderBy: 'name'}
);

SevenFi.SearchDataSource = SC.DataSource.extend(
/** @scope SevenFi.SearchDataSource.prototype */ {

	fetch: function(store, query) {
		console.debug("QUERY: <" + query.conditions + ">");

		if (query === SevenFi.ARTIST_SEARCH_QUERY) {
			SC.Request.getUrl('/7digital/search/artists?q=chubby+jackson').
				json().
				notify(this, 'didFetchTasks', store, query).
				send();
			
			  return YES;
		}

  		return NO;
  	},
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
