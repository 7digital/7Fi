SevenFi.main = function main() {
  	SevenFi.getPath('mainPage.mainPane').append() ;

  	var tasks = SevenFi.store.find(SevenFi.Task);
	SevenFi.tasksController.set('content', tasks);
} ;

function main() { SevenFi.main(); }
