SevenFi.logController = SC.ArrayController.create(
/** @scope SevenFi.logController.prototype */ {

	// Logs the supplied message
	log : function(what) {
		SevenFi.log.createRecord(SevenFi.LogEntry, {
			guid 		: '1', //TODO: generate these
			message 	: what,
			timestamp 	: SC.DateTime.create()
		});
	}
});
