SevenFi.main = function main() {
  	SevenFi.getPath('mainPage.mainPane').append();

  	var artistSearchResults = SevenFi.store.find(SevenFi.ARTIST_SEARCH_QUERY); 

	SevenFi.tasksController.set('content', artistSearchResults);
} ;

function main() { SevenFi.main(); }