SevenFi.main = function main() {
  	SevenFi.getPath('mainPage.mainPane').append();

	SevenFi.logController.set('content', SevenFi.log.find(SevenFi.LogEntry));
};

function main() { SevenFi.main(); }