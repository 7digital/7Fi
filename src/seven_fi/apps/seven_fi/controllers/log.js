SevenFi.logController = SC.ArrayController.create(
/** @scope SevenFi.tasksController.prototype */ {
	log : function() {
		var lastEntry = SevenFi.log.findAll();

		return "LOG";
	}.property('length').cacheable()
});
