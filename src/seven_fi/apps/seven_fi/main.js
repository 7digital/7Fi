SevenFi.main = function main() {
  	SevenFi.getPath('mainPage.mainPane').append();

	// Attaching controllers to specific record arrays
	SevenFi.tasksController.set('content', SevenFi.store.find(SevenFi.ARTIST_SEARCH_QUERY));
	SevenFi.trackController.set('content', SevenFi.trackStore.find(SevenFi.TRACK_SEARCH_QUERY));
	SevenFi.logController.set('content', SevenFi.log.find(SevenFi.LogEntry));
};

function main() { SevenFi.main(); }