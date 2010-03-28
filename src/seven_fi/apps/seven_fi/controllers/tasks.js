SevenFi.tasksController = SC.ArrayController.create(
/** @scope SevenFi.tasksController.prototype */ {
	search : function() {
		var theSearchTerm = this._findSearchTerm(); 

		this._log("Searching for <%@1>".fmt(theSearchTerm));

		var query = SC.Query.local(
			SevenFi.Artist,
			"name = %@",
			{ name : theSearchTerm},
			{ orderBy: 'name'}
		);
		
		this._clear();

		SevenFi.store.find(query);

		SevenFi.tasksController.set('content', SevenFi.store.find(SevenFi.ARTIST_SEARCH_QUERY));
	},

	onSelected : function(listView) {
		var selection = listView.get('selection');
		
		this._log("Item(s) selected: %@1".fmt(selection.get('length')));
	},

	summary : function() {
    	var len = this.get('length'), ret ;

    	if (len && len > 0) {
      		ret = len === 1 ? "1 result" : "%@ results".fmt(len);
    	} else ret = "No results";

    	return ret;
  	}.property('length').cacheable(),

	_log : function(message) {
		SevenFi.logController.log(message);
	},

	_findSearchTerm : function() {
		return SevenFi.getPath('mainPage.mainPane.topView.searchTextBox').get('value');
	},

	_clear : function() {
		SevenFi.store = SC.Store.create({
			commitRecordsAutomatically: NO
		}).from('SevenFi.SearchDataSource');	
	}
});
