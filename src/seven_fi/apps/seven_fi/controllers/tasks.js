SevenFi.tasksController = SC.ArrayController.create(
/** @scope SevenFi.tasksController.prototype */ {
	search : function() {
		var theSearchTerm = this._findSearchTerm(); 

		var query = SC.Query.local(
			SevenFi.Artist,
			"name = %@",
			{ name : theSearchTerm},
			{ orderBy: 'name'}
		);

		console.debug(
			"QUERY: <conditions:" + query.conditions + ", " +
			"parameters:" + query.parameters + ", " +
			"props:" + query.concatenatedProperties + "," +
			">"
		);

		var results = SevenFi.store.find(query);

		console.log("Result: <%@1>".fmt(results.length()));
	},

	summary: function() {
    	var len = this.get('length'), ret ;

    	if (len && len > 0) {
      		ret = len === 1 ? "1 result" : "%@ results".fmt(len);
    	} else ret = "No tasks";

    	return ret;
  	}.property('length').cacheable(),

	_findSearchTerm : function() {
		return SevenFi.getPath('mainPage.mainPane.topView.searchTextBox').get('value');
	}
});
