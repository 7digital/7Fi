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

		SevenFi.store.find(query);
	},

	summary: function() {
    	var len = this.get('length'), ret ;

    	if (len && len > 0) {
      		ret = len === 1 ? "1 result" : "%@ results".fmt(len);
    	} else ret = "No tasks";

    	return ret;
  	}.property('length').cacheable(),

	log : function() {
		var lastEntry = SevenFi.log.findAll();
		
		return "LOG";	
	}.property('length').cacheable(),

	_findSearchTerm : function() {
		return SevenFi.getPath('mainPage.mainPane.topView.searchTextBox').get('value');
	}
});
