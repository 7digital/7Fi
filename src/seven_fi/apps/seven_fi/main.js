SevenFi.main = function main() {
  	SevenFi.getPath('mainPage.mainPane').append();

	// Don't know why but no results display unless we do this
	SevenFi.tasksController.set('content', SevenFi.store.find(SevenFi.ARTIST_SEARCH_QUERY));
	SevenFi.LogController.set('content', SevenFi.log.find(SevenFi.LAST_THREE_LOG_ENTRIES));
};

function main() { SevenFi.main(); }